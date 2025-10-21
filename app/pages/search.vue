<script setup lang="ts">
import { useProfilesApi } from "~/composables/useProfilesApi";
import { useLazyAsyncDataWithError } from "#imports";

// SEO Meta
useSeoMeta({
  title: "Browse All Profiles - Random Profiles Catalog",
  ogTitle: "Browse All Profiles - Random Profiles Catalog",
  description:
    "Browse our complete collection of randomly generated person profiles. Discover detailed information about randomly created individuals.",
  ogDescription:
    "Browse our complete collection of randomly generated person profiles. Discover detailed information about randomly created individuals.",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
});

// Fetch profiles for search page (exactly 10)
const { fetchProfiles } = useProfilesApi();
const { data, pending, refresh } = await useLazyAsyncDataWithError(
  "search-profiles",
  () => fetchProfiles(10)
);
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <SearchHeaderSection />

    <!-- Profiles Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Results Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">All Profiles</h2>
          <p class="text-lg text-gray-600">
            Showing {{ data?.count || 0 }} randomly generated profiles
          </p>
        </div>

        <!-- Loading State -->
        <div v-if="pending" class="flex justify-center py-12">
          <LoadingSpinner />
        </div>

        <!-- Profiles Grid -->
        <div
          v-else-if="data"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <ProfileCard
            v-for="profile in data.data"
            :key="profile.id"
            :profile="profile"
          />
        </div>

        <!-- Refresh Button -->
        <div v-if="data" class="text-center mt-12">
          <button
            :disabled="pending"
            class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            @click="refresh()"
          >
            {{ pending ? "Loading..." : "Load New Profiles" }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
