<script setup lang="ts">
import type { Profile } from "#shared/types/profile";
import BaseCard from "../shared/BaseCard.vue";

interface Props {
  profile: Profile;
}

defineProps<Props>();
</script>

<template>
  <BaseCard
    class="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    <NuxtLink
      :to="`/profiles/${profile.id}`"
      :aria-label="`View profile of ${profile.name}`"
    >
      <div class="p-6">
        <!-- Avatar -->
        <div class="flex justify-center mb-4">
          <NuxtImg
            :src="profile.avatarUrl"
            :alt="`Avatar of ${profile.name}`"
            class="w-20 h-20 rounded-full object-cover border-4 border-gray-200 group-hover:border-blue-300 transition-colors"
            loading="lazy"
          />
        </div>

        <!-- Name -->
        <h3
          class="text-lg font-semibold text-gray-900 text-center mb-2 group-hover:text-blue-600 transition-colors"
        >
          {{ profile.name }}
        </h3>

        <!-- Job Title -->
        <p class="text-sm text-gray-600 text-center mb-3">
          {{ profile.jobTitle }}
        </p>

        <!-- Company -->
        <p class="text-sm text-gray-500 text-center mb-4">
          {{ profile.company }}
        </p>

        <!-- Location -->
        <div
          class="flex items-center justify-center text-sm text-gray-500 mb-4"
        >
          <svg
            class="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {{ profile.address.city }}, {{ profile.address.state }}
        </div>

        <!-- Bio Preview -->
        <p
          class="text-sm text-gray-600 text-center line-clamp-2"
          :title="profile.bio"
        >
          {{ profile.bio }}
        </p>
      </div>
    </NuxtLink>
  </BaseCard>
</template>
