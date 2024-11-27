interface ImportMetaEnv {
  /** Baseurl of the API server */
  readonly VITE_API_BASEURL: string;
  /** Baseurl of MinIO */
  readonly VITE_ASSETS_BASEURL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
