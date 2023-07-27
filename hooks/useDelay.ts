export const useDelay = (delayInMs: number) => ({
  wait: async () =>
    new Promise((resolve) => {
      setTimeout(resolve, delayInMs);
    }),
});
