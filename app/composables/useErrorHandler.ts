import { ref } from "vue";

interface ErrorState {
  visible: boolean;
  title: string;
  message: string;
  retry?: () => void;
}

// Global error state
const errorState = ref<ErrorState>({
  visible: false,
  title: "",
  message: "",
  retry: undefined,
});

export const useErrorHandler = () => {
  const showError = (options: {
    title?: string;
    message: string;
    retry?: () => void;
  }) => {
    errorState.value = {
      visible: true,
      title: options.title || "Something went wrong",
      message: options.message,
      retry: options.retry,
    };
  };

  const hideError = () => {
    errorState.value = {
      visible: false,
      title: "",
      message: "",
      retry: undefined,
    };
  };

  const handleRetry = () => {
    if (errorState.value.retry) {
      errorState.value.retry();
    }
    hideError();
  };

  return {
    errorState: readonly(errorState),
    showError,
    hideError,
    handleRetry,
  };
};
