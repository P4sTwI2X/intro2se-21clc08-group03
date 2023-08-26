/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_POINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
