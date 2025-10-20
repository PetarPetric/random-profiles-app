import { ProfileResponseSchema } from '#shared/types/profile'

export default defineEventHandler(async (event) => {
  try {
    // Get id from route params
    const id = getRouterParam(event, 'id')

    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'Profile ID is required',
      })
    }

    // in a real app, we'd fetch by ID from a database
    const profile = generateProfile()
    


    profile.id = id

    // Validate response with Zod
    const validation = ProfileResponseSchema.safeParse({
      success: true,
      data: profile,
    })

    if (!validation.success) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        message: 'Failed to validate profile data',
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