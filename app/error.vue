<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="max-w-md w-full text-center">
      <div class="mb-8">
        <h1 class="text-6xl font-bold text-gray-900 mb-2">
          {{ error?.statusCode || "500" }}
        </h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          {{ error?.statusMessage || "Something went wrong" }}
        </h2>
        <p class="text-gray-600">
          {{ error?.message || "An unexpected error occurred" }}
        </p>
      </div>

      <button
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
        @click="handleError"
      >
        Go back home
      </button>
    </div>
  </div>
</template>
