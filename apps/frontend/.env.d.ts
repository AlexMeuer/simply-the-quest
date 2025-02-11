interface ImportMetaEnv {
  /** Baseurl of the API server */
  readonly VITE_API_BASEURL_SERVER: string;
  readonly VITE_API_BASEURL_CLIENT: string;
  /** Baseurl of MinIO */
  readonly VITE_ASSETS_BASEURL: string;

  readonly VITE_SESSION_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
