export const useApiBase = () => {
  const config = useRuntimeConfig();
  const baseUrl = import.meta.client
    ? config.public.apiBaseUrlBrowser
    : config.apiBaseUrlServer;

  return baseUrl;
};