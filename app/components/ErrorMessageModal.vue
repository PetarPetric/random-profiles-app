<script setup lang="ts">
const { errorState, hideError, handleRetry } = useErrorHandler()
</script>

<template>
  <!-- Modal Overlay -->
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="errorState.visible"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        @click.self="hideError"
      >
        <!-- Modal Content -->
        <div
          class="bg-white rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all"
          role="dialog"
          aria-modal="true"
          aria-labelledby="error-title"
          aria-describedby="error-description"
        >
          <!-- Icon -->
          <div class="flex items-center justify-center mb-4">
            <div class="bg-red-100 rounded-full p-3">
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
          </div>

          <!-- Title -->
          <h3 id="error-title" class="text-xl font-semibold text-gray-900 text-center mb-2">
            {{ errorState.title }}
          </h3>

          <!-- Message -->
          <p id="error-description" class="text-gray-600 text-center mb-6">
            {{ errorState.message }}
          </p>

          <!-- Actions -->
          <div class="flex gap-3">
            <button
              v-if="errorState.retry"
              class="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              @click="handleRetry"
            >
              Try Again
            </button>
            <button
              class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              @click="hideError"
            >
              {{ errorState.retry ? 'Cancel' : 'Close' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9);
  opacity: 0;
}
</style>