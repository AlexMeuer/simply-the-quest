interface ImportMetaEnv {
  /** Baseurl of the API server */
  readonly VITE_API_BASEURL_SERVER: string;
  readonly VITE_API_BASEURL_CLIENT: string;
  /** Baseurl of MinIO */
  readonly VITE_ASSETS_BASEURL: string;

  /** Baseurl of the API server for SSR */
  readonly VITE_API_BASEURL_SSR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
