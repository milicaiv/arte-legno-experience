import { useEffect } from "react";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_ROBOTS,
  DEFAULT_THEME_COLOR,
  SITE_NAME,
  buildAbsoluteUrl,
  resolveAbsoluteAssetUrl,
} from "@/lib/seo";

type JsonLdObject = Record<string, unknown>;

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  robots?: string;
  type?: "website" | "article";
  author?: string;
  section?: string;
  schema?: JsonLdObject | JsonLdObject[];
};

const findMetaTag = (attribute: "name" | "property", key: string) =>
  Array.from(document.head.querySelectorAll<HTMLMetaElement>(`meta[${attribute}]`)).find(
    (tag) => tag.getAttribute(attribute) === key,
  );

const upsertMetaTag = (attribute: "name" | "property", key: string, content?: string | null) => {
  const existingTag = findMetaTag(attribute, key);

  if (!content) {
    existingTag?.remove();
    return;
  }

  const tag = existingTag ?? document.createElement("meta");

  if (!existingTag) {
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const upsertCanonicalLink = (href: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
};

const syncJsonLd = (schemas: JsonLdObject[]) => {
  const existingScripts = Array.from(
    document.head.querySelectorAll<HTMLScriptElement>("script[data-seo-schema]"),
  );

  schemas.forEach((schema, index) => {
    let script = document.head.querySelector<HTMLScriptElement>(
      `script[data-seo-schema="${index}"]`,
    );

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-schema", String(index));
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  });

  existingScripts
    .filter((script) => {
      const index = Number(script.getAttribute("data-seo-schema"));
      return Number.isNaN(index) || index >= schemas.length;
    })
    .forEach((script) => script.remove());
};

export const Seo = ({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  keywords = [],
  robots = DEFAULT_ROBOTS,
  type = "website",
  author = SITE_NAME,
  section,
  schema,
}: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = buildAbsoluteUrl(path);
    const resolvedImage = resolveAbsoluteAssetUrl(image);
    const normalizedSchema = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

    document.documentElement.lang = "bs";
    document.title = title;

    upsertMetaTag("name", "description", description);
    upsertMetaTag("name", "keywords", keywords.length > 0 ? keywords.join(", ") : null);
    upsertMetaTag("name", "author", author);
    upsertMetaTag("name", "robots", robots);
    upsertMetaTag("name", "theme-color", DEFAULT_THEME_COLOR);
    upsertMetaTag("property", "og:locale", "bs_BA");
    upsertMetaTag("property", "og:title", title);
    upsertMetaTag("property", "og:description", description);
    upsertMetaTag("property", "og:url", canonicalUrl);
    upsertMetaTag("property", "og:site_name", SITE_NAME);
    upsertMetaTag("property", "og:type", type);
    upsertMetaTag("property", "og:image", resolvedImage);
    upsertMetaTag("property", "og:image:alt", imageAlt ?? title);
    upsertMetaTag("name", "twitter:card", "summary_large_image");
    upsertMetaTag("name", "twitter:title", title);
    upsertMetaTag("name", "twitter:description", description);
    upsertMetaTag("name", "twitter:image", resolvedImage);
    upsertMetaTag("property", "article:section", type === "article" ? section ?? null : null);
    upsertMetaTag("property", "article:author", type === "article" ? author : null);

    upsertCanonicalLink(canonicalUrl);
    syncJsonLd(normalizedSchema);
  }, [author, description, image, imageAlt, keywords, path, robots, schema, section, title, type]);

  return null;
};
