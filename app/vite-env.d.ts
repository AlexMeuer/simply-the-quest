/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_DATABASE_URL: string;
  readonly VITE_NEO4J_URI: string;
  readonly VITE_NEO4J_USER: string;
  readonly VITE_NEO4J_PASS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
