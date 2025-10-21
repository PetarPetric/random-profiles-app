<template>
  <section
    class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"
  >
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
</template>
