<script setup lang="ts">
interface Props {
  title?: string;
  message?: string;
  showRetry?: boolean;
}

defineProps<Props>();
defineEmits<{
  retry: [];
}>();
</script>

<template>
  <div
    class="bg-red-50 border border-red-200 rounded-lg p-6 text-center"
    role="alert"
    aria-live="polite"
  >
    <div class="flex items-center justify-center mb-4">
      <svg
        class="w-8 h-8 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
        />
      </svg>
    </div>

    <h3 class="text-lg font-semibold text-red-800 mb-2">
      {{ title || "Something went wrong" }}
    </h3>

    <p class="text-red-700 mb-4">
      {{ message || "An unexpected error occurred. Please try again." }}
    </p>
    <button
      v-if="showRetry"
      class="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      @click="$emit('retry')"
    >
      Try Again
    </button>
  </div>
</template>