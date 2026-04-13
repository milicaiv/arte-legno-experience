/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_ENDPOINT?: string;
  readonly VITE_CONTACT_FORM_ENDPOINT?: string;
  readonly VITE_NEWSLETTER_FORM_ENDPOINT?: string;
  readonly VITE_FORM_RECIPIENT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
