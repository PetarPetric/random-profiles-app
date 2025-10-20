<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Random Profiles Catalog
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90">
          Discover randomly generated person profiles with detailed information
        </p>
        <NuxtLink
          to="/search"
          class="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
        >
          Browse All Profiles
        </NuxtLink>
      </div>
    </section>

    <!-- Profiles Gallery -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Profiles</h2>
          <p class="text-lg text-gray-600">Explore our collection of randomly generated profiles</p>
        </div>

        <!-- Loading State -->
        <div v-if="pending" class="flex justify-center py-12">
          <LoadingSpinner />
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="max-w-md mx-auto">
          <ErrorMessage
            title="Failed to load profiles"
            :message="error.message"
            :show-retry="true"
            @retry="refresh()"
          />
        </div>

        <!-- Profiles Grid -->
        <div v-else-if="data" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProfileCard
            v-for="profile in data.data"
            :key="profile.id"
            :profile="profile"
          />
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-white py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Want to see more profiles?
        </h2>
        <p class="text-lg text-gray-600 mb-8">
          Browse our complete collection of randomly generated profiles
        </p>
        <NuxtLink
          to="/search"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          View All Profiles
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useProfilesApi } from '~/composables/useProfilesApi'

// SEO Meta
useSeoMeta({
  title: 'Random Profiles Catalog - Discover Randomly Generated Person Profiles',
  ogTitle: 'Random Profiles Catalog - Discover Randomly Generated Person Profiles',
  description: 'Explore randomly generated person profiles with detailed information including contact details, addresses, and professional backgrounds.',
  ogDescription: 'Explore randomly generated person profiles with detailed information including contact details, addresses, and professional backgrounds.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})

// Fetch profiles for home page
const { fetchProfiles } = useProfilesApi()
const { data, pending, error, refresh } = await useLazyAsyncData('home-profiles', () => fetchProfiles(6))
</script>
