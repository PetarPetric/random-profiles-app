<script setup lang="ts">
import { useProfilesApi } from "~/composables/useProfilesApi";
import { useLazyAsyncDataWithError } from "#imports";

// Get the profile ID from the route
const route = useRoute();
const profileId = route.params.id as string;

if (!profileId) {
  throw createError({
    statusCode: 400,
    statusMessage: "Profile ID is required",
  });
}

// SEO Meta - will be updated when data loads
useSeoMeta({
  title: "Profile Details - Random Profiles Catalog",
  ogTitle: "Profile Details - Random Profiles Catalog",
  description: "View detailed information about a randomly generated profile.",
  ogDescription:
    "View detailed information about a randomly generated profile.",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
});

// Fetch the specific profile
const { fetchProfile } = useProfilesApi();
const { data, pending } = await useLazyAsyncDataWithError(
  `profile-${profileId}`,
  () => fetchProfile(profileId)
);

// Update SEO meta when data is available
watchEffect(() => {
  if (data.value) {
    const profile = data.value.data;
    useSeoMeta({
      title: `${profile.name} - Profile Details | Random Profiles Catalog`,
      ogTitle: `${profile.name} - Profile Details | Random Profiles Catalog`,
      description: `View detailed information about ${profile.name}, a ${profile.jobTitle} at ${profile.company}.`,
      ogDescription: `View detailed information about ${profile.name}, a ${profile.jobTitle} at ${profile.company}.`,
      ogImage: profile.avatarUrl,
      twitterCard: "summary_large_image",
    });
  }
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Loading State -->
      <div v-if="pending" class="flex justify-center py-12">
        <SharedLoadingSpinner />
      </div>

      <!-- Profile Details -->
      <div v-else-if="data">
        <SharedBaseCard class="mx-auto">
          <ProfileDetails :profile="data.data" />
        </SharedBaseCard>
      </div>
    </div>
  </div>
</template>
