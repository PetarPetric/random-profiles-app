<script setup lang="ts">
import type { Profile } from '#shared/types/profile'

interface Props {
  profile: Profile
}

defineProps<Props>()

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <!-- Header Section -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Avatar -->
        <div class="mb-6 md:mb-0 md:mr-8">
          <NuxtImg
            :src="profile.avatarUrl"
            :alt="`Avatar of ${profile.name}`"
            class="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            loading="lazy"
          />
        </div>
        
        <!-- Basic Info -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl font-bold mb-2">{{ profile.name }}</h1>
          <p class="text-xl mb-2">{{ profile.jobTitle }}</p>
          <p class="text-lg opacity-90">{{ profile.company }}</p>
        </div>
      </div>
    </div>
    
    <!-- Content Section -->
    <div class="p-8">
      <!-- Bio Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">About</h2>
        <p class="text-gray-700 leading-relaxed">{{ profile.bio }}</p>
      </section>
      
      <!-- Contact Information -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a :href="`mailto:${profile.email}`" class="text-blue-600 hover:text-blue-800 transition-colors">
                {{ profile.email }}
              </a>
            </div>
            
            <div class="flex items-center">
              <svg class="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a :href="`tel:${profile.phone}`" class="text-blue-600 hover:text-blue-800 transition-colors">
                {{ profile.phone }}
              </a>
            </div>
            
            <div class="flex items-center">
              <svg class="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
              <a :href="profile.website" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 transition-colors">
                {{ profile.website }}
              </a>
            </div>
            
            <div class="flex items-center">
              <svg class="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="text-gray-700">{{ profile.username }}</span>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-gray-700">{{ formatDate(profile.birthDate) }}</span>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Address Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Address</h2>
        <div class="bg-gray-50 rounded-lg p-6">
          <div class="flex items-start">
            <svg class="w-5 h-5 text-gray-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p class="text-gray-700">{{ profile.address.street }}</p>
              <p class="text-gray-700">{{ profile.address.city }}, {{ profile.address.state }} {{ profile.address.zipCode }}</p>
              <p class="text-gray-700">{{ profile.address.country }}</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Back Button -->
      <div class="flex justify-center">
        <NuxtLink
          to="/"
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>