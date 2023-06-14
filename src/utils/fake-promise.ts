export function fakePromise(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(void 0);
    }, delay);
  });
}
