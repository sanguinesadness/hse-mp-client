export const redirect = (url: string): Window | null => {
  return window.open(url, '_blank', 'noopener noreferrer');
};
