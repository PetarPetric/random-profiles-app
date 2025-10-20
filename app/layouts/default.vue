<script setup lang="ts">
useHead({
  titleTemplate: "%s | Random Profiles Catalog",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "format-detection", content: "telephone=no" },
    { name: "theme-color", content: "#2563eb" },
  ],
  link: [{ rel: "canonical", href: "https://random-profiles-catalog.com" }],
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation Header -->
    <nav class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <NuxtLink
            to="/"
            class="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          >
            <svg
              class="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Random Profiles</span>
          </NuxtLink>

          <!-- Navigation Links -->
          <div class="flex items-center space-x-8">
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              :class="{ 'text-blue-600': $route.path === '/' }"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/search"
              class="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
              :class="{ 'text-blue-600': $route.path === '/search' }"
            >
              Browse Profiles
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content - This is where page content goes -->
    <main class="transition-all duration-300 ease-in-out">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center">
          <p class="text-gray-600">
            Random Profiles Catalog - Built with Nuxt 4, Tailwind CSS, and
            Faker.js
          </p>
          <p class="text-sm text-gray-500 mt-2">
            All profiles are randomly generated for demonstration purposes
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
