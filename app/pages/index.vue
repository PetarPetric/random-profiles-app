<script setup lang="ts">
import { useProfilesApi } from "~/composables/useProfilesApi";
import { useLazyAsyncDataWithError } from "#imports";

// SEO Meta
useSeoMeta({
  title:
    "Random Profiles Catalog - Discover Randomly Generated Person Profiles",
  ogTitle:
    "Random Profiles Catalog - Discover Randomly Generated Person Profiles",
  description:
    "Explore randomly generated person profiles with detailed information including contact details, addresses, and professional backgrounds.",
  ogDescription:
    "Explore randomly generated person profiles with detailed information including contact details, addresses, and professional backgrounds.",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
});

// Fetch profiles for home page
const { fetchProfiles } = useProfilesApi();
const { data, pending } = await useLazyAsyncDataWithError("home-profiles", () =>
  fetchProfiles(6)
);
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <HomeHeroSection />

    <!-- Profiles Gallery -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Featured Profiles
          </h2>
          <p class="text-lg text-gray-600">
            Explore our collection of randomly generated profiles
          </p>
        </div>
        <!-- Loading State -->
        <div v-if="pending" class="flex justify-center py-12">
          <SharedLoadingSpinner />
        </div>

        <!-- Profiles Grid -->
        <div
          v-else-if="data"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ProfileCard
            v-for="profile in data.data"
            :key="profile.id"
            :profile="profile"
          />
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <HomeCallToAction />
  </div>
</template>
