export const useApiBase = () => {
  const config = useRuntimeConfig();
  const baseUrl = process.client
    ? config.public.apiBaseUrlBrowser
    : config.apiBaseUrlServer;

  return baseUrl;
};