import { useErrorHandler } from "#imports";
export const useLazyAsyncDataWithError = <T>(
  key: string,
  fetcher: () => Promise<T>
) => {
  const { data, pending, error, execute, refresh } = useLazyAsyncData(
    key,
    fetcher
  );
  const { showError } = useErrorHandler();

  watch(error, (newError) => {
    if (newError) {
      showError(newError);
    }
  });

  return {
    pending,
    data,
    error,
    execute,
    refresh,
  };
};
