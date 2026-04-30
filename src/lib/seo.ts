export const SITE_NAME = "ATLAGIĆ - ARTE LEGNO";
export const SITE_URL = "https://atlagic.org";
export const CONTACT_EMAIL = "atlagicartelegno@gmail.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
export const DEFAULT_THEME_COLOR = "#6f4a2d";

type JsonLdObject = Record<string, unknown>;

export const buildAbsoluteUrl = (path = "/") => new URL(path, `${SITE_URL}/`).toString();

export const resolveAbsoluteAssetUrl = (path = DEFAULT_OG_IMAGE) => {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return buildAbsoluteUrl(path.startsWith("/") ? path : `/${path}`);
};

export const buildOrganizationSchema = (overrides: JsonLdObject = {}): JsonLdObject => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: buildAbsoluteUrl("/favicon-256x256.png"),
  image: DEFAULT_OG_IMAGE,
  email: `mailto:${CONTACT_EMAIL}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Marka Lipovca 64",
    addressLocality: "Banja Luka",
    postalCode: "78000",
    addressCountry: "BA",
  },
  inLanguage: "bs-BA",
  ...overrides,
});

export const buildWebsiteSchema = (overrides: JsonLdObject = {}): JsonLdObject => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "bs-BA",
  ...overrides,
});
