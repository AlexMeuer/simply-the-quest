export const assetUrlFor = (path: string | undefined | null) => {
  if (path) {
    // Lazy url check
    if (path.startsWith("/")) {
      return `${import.meta.env.VITE_ASSETS_BASEURL}${path}`;
    }
    return path;
  }
  return "";
};
