import { ProfilesResponseSchema } from '#shared/types/profile'

export default defineEventHandler(async (event) => {
  try {
    // Get count from query params, default to 6 for home page
    const query = getQuery(event)
    const count = Number(query.count) || 6

    // Validate count is reasonable
    if (count < 1 || count > 100) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'Count must be between 1 and 100',
      })
    }

    // Generate profiles
    const profiles = generateProfiles(count)

    // Validate response with Zod
    const validation = ProfilesResponseSchema.safeParse({
      success: true,
      data: profiles,
      count: profiles.length,
    })

    if (!validation.success) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        message: 'Failed to validate profiles data',
      })
    }

    return validation.data
  } catch (error) {
    if (error && typeof error === 'object' && 'statusCode' in error) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'An unexpected error occurred',
    })
  }
})