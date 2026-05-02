import fs from "node:fs/promises";
import path from "node:path";

const DIST_DIR = path.resolve("dist");
const SITE_URL = "https://atlagic.org";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_OG_ALT = "ATLAGIĆ - ARTE LEGNO logotip i vizuelni identitet";
const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

const routes = [
  {
    path: "/",
    title: "ATLAGIĆ - ARTE LEGNO | Ručno izrađen drveni namještaj i umjetnost",
    description:
      "Ručna izrada drvenog namještaja, umjetničkih predmeta i enterijerskih rješenja u Banjoj Luci. Unikatni komadi po mjeri, izrađeni da traju generacijama.",
    keywords:
      "ručno izrađen namještaj, drveni namještaj po mjeri, umjetnički drveni predmeti, Banja Luka, ATLAGIĆ ARTE LEGNO, enterijerski dizajn od drveta",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "ATLAGIĆ - ARTE LEGNO",
      url: `${SITE_URL}/`,
      description:
        "Zvanična web stranica ATLAGIĆ - ARTE LEGNO sa pregledom radova, priča iz radionice i kontakt informacijama.",
      inLanguage: "bs-BA",
    },
  },
  {
    path: "/about",
    title: "O nama | ATLAGIĆ - ARTE LEGNO",
    description:
      "Saznajte kako ATLAGIĆ - ARTE LEGNO u Banjoj Luci spaja porodični zanat, održivo drvo i savremeni dizajn u unikatne komade po mjeri.",
    keywords:
      "o nama ATLAGIĆ ARTE LEGNO, drvodjeljski zanat Banja Luka, ručna izrada drveta, održivi drveni namještaj, porodična radionica",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "O nama | ATLAGIĆ - ARTE LEGNO",
      url: `${SITE_URL}/about`,
      description:
        "Priča o radionici ATLAGIĆ - ARTE LEGNO, zanatskoj filozofiji i procesu ručne izrade u Banjoj Luci.",
      inLanguage: "bs-BA",
    },
  },
  {
    path: "/blog",
    title: "Blog o drvetu i zanatu | ATLAGIĆ - ARTE LEGNO",
    description:
      "Čitajte priče iz radionice ATLAGIĆ - ARTE LEGNO o ručnoj obradi drveta, održivosti, dizajnu namještaja i sporom zanatu iz Banje Luke.",
    keywords:
      "blog o drvetu, ručna obrada drveta, drvodjeljstvo Banja Luka, održivi namještaj, zanat i dizajn",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog | ATLAGIĆ - ARTE LEGNO",
      url: `${SITE_URL}/blog`,
      description:
        "Blog ATLAGIĆ - ARTE LEGNO sa tekstovima o drvetu, zanatu, procesu izrade i održivosti.",
      inLanguage: "bs-BA",
    },
  },
  {
    path: "/contact",
    title: "Kontakt | ATLAGIĆ - ARTE LEGNO",
    description:
      "Kontaktirajte ATLAGIĆ - ARTE LEGNO za drveni namještaj po mjeri, umjetničke drvene predmete i dogovor za radionicu u Banjoj Luci.",
    keywords:
      "kontakt ATLAGIĆ ARTE LEGNO, namještaj po mjeri Banja Luka, radionica drvodjeljstvo, umjetnički drveni predmeti kontakt",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Kontakt | ATLAGIĆ - ARTE LEGNO",
      url: `${SITE_URL}/contact`,
      description:
        "Kontakt stranica radionice ATLAGIĆ - ARTE LEGNO sa formom upita i adresom u Banjoj Luci.",
      inLanguage: "bs-BA",
    },
  },
  {
    path: "/blog/jezik-teksture-drveta",
    title: "Jezik teksture drveta | Blog | ATLAGIĆ - ARTE LEGNO",
    description:
      "Razumijevanje priča koje svaki komad drveta nosi u svojim šarama i načina na koji ih učimo čitati.",
    keywords:
      "Jezik teksture drveta, Filozofija, blog ATLAGIĆ ARTE LEGNO, ručna obrada drveta, drvodjeljski zanat",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Jezik teksture drveta",
      url: `${SITE_URL}/blog/jezik-teksture-drveta`,
      mainEntityOfPage: `${SITE_URL}/blog/jezik-teksture-drveta`,
      description:
        "Razumijevanje priča koje svaki komad drveta nosi u svojim šarama i načina na koji ih učimo čitati.",
      inLanguage: "bs-BA",
    },
  },
  {
    path: "/blog/dan-u-radionici",
    title: "Dan u radionici | Blog | ATLAGIĆ - ARTE LEGNO",
    description:
      "Ritam ručnog zanata, od prvog svjetla zore do posljednjeg poliranja dana.",
    keywords:
      "Dan u radionici, Iza scene, blog ATLAGIĆ ARTE LEGNO, ručna obrada drveta, drvodjeljski zanat",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Dan u radionici",
      url: `${SITE_URL}/blog/dan-u-radionici`,
      mainEntityOfPage: `${SITE_URL}/blog/dan-u-radionici`,
      description:
        "Ritam ručnog zanata, od prvog svjetla zore do posljednjeg poliranja dana.",
      inLanguage: "bs-BA",
    },
  },
  {
    path: "/blog/postovanje-ritma-prirode",
    title: "Poštovanje ritma prirode | Blog | ATLAGIĆ - ARTE LEGNO",
    description:
      "Zašto su sporo zanatstvo i održivost neodvojive vrijednosti u našoj praksi.",
    keywords:
      "Poštovanje ritma prirode, Održivost, blog ATLAGIĆ ARTE LEGNO, ručna obrada drveta, drvodjeljski zanat",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Poštovanje ritma prirode",
      url: `${SITE_URL}/blog/postovanje-ritma-prirode`,
      mainEntityOfPage: `${SITE_URL}/blog/postovanje-ritma-prirode`,
      description:
        "Zašto su sporo zanatstvo i održivost neodvojive vrijednosti u našoj praksi.",
      inLanguage: "bs-BA",
    },
  },
  {
    path: "/blog/umjetnost-struganja-drveta",
    title: "Umjetnost struganja drveta | Blog | ATLAGIĆ - ARTE LEGNO",
    description:
      "Meditativna praksa koja pretvara sirovu građu u tečne, organske forme.",
    keywords:
      "Umjetnost struganja drveta, Proces izrade, blog ATLAGIĆ ARTE LEGNO, ručna obrada drveta, drvodjeljski zanat",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Umjetnost struganja drveta",
      url: `${SITE_URL}/blog/umjetnost-struganja-drveta`,
      mainEntityOfPage: `${SITE_URL}/blog/umjetnost-struganja-drveta`,
      description:
        "Meditativna praksa koja pretvara sirovu građu u tečne, organske forme.",
      inLanguage: "bs-BA",
    },
  },
  {
    path: "/blog/stolovi-koji-okupljaju",
    title: "Stolovi koji okupljaju | Blog | ATLAGIĆ - ARTE LEGNO",
    description:
      "O dizajniranju namještaja koji postaje srce porodičnog života i razgovora.",
    keywords:
      "Stolovi koji okupljaju, Filozofija, blog ATLAGIĆ ARTE LEGNO, ručna obrada drveta, drvodjeljski zanat",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Stolovi koji okupljaju",
      url: `${SITE_URL}/blog/stolovi-koji-okupljaju`,
      mainEntityOfPage: `${SITE_URL}/blog/stolovi-koji-okupljaju`,
      description:
        "O dizajniranju namještaja koji postaje srce porodičnog života i razgovora.",
      inLanguage: "bs-BA",
    },
  },
  {
    path: "/blog/alati-zanata",
    title: "Alati zanata | Blog | ATLAGIĆ - ARTE LEGNO",
    description:
      "Ručni alati prenošeni kroz generacije i njihova nezamjenjiva uloga.",
    keywords:
      "Alati zanata, Iza scene, blog ATLAGIĆ ARTE LEGNO, ručna obrada drveta, drvodjeljski zanat",
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Alati zanata",
      url: `${SITE_URL}/blog/alati-zanata`,
      mainEntityOfPage: `${SITE_URL}/blog/alati-zanata`,
      description:
        "Ručni alati prenošeni kroz generacije i njihova nezamjenjiva uloga.",
      inLanguage: "bs-BA",
    },
  },
];

const upsertTitle = (html, title) =>
  html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);

const upsertMeta = (html, attribute, key, value) => {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${escapeRegExp(key)}"\\s+content="[^"]*"\\s*\\/?>`,
    "i",
  );

  const tag = `<meta ${attribute}="${key}" content="${escapeHtmlAttribute(value)}" />`;

  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
};

const upsertCanonical = (html, href) => {
  const tag = `<link rel="canonical" href="${escapeHtmlAttribute(href)}" />`;
  return html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, tag);
};

const injectRouteSchema = (html, schema) => {
  const serialized = JSON.stringify(schema);
  const script =
    `    <script type="application/ld+json" data-static-route-schema>` +
    `${serialized}</script>\n`;

  if (html.includes('data-static-route-schema')) {
    return html.replace(
      /<script type="application\/ld\+json" data-static-route-schema>[\s\S]*?<\/script>\n?/i,
      script,
    );
  }

  return html.replace("</head>", `${script}  </head>`);
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const escapeHtmlAttribute = (value) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");

const renderRouteHtml = (template, route) => {
  const canonicalUrl = new URL(route.path, `${SITE_URL}/`).toString();
  let html = template;

  html = upsertTitle(html, route.title);
  html = upsertMeta(html, "name", "description", route.description);
  html = upsertMeta(html, "name", "keywords", route.keywords);
  html = upsertMeta(html, "name", "robots", DEFAULT_ROBOTS);
  html = upsertMeta(html, "property", "og:title", route.title);
  html = upsertMeta(html, "property", "og:description", route.description);
  html = upsertMeta(html, "property", "og:url", canonicalUrl);
  html = upsertMeta(html, "property", "og:type", route.type);
  html = upsertMeta(html, "property", "og:image", DEFAULT_OG_IMAGE);
  html = upsertMeta(html, "property", "og:image:alt", DEFAULT_OG_ALT);
  html = upsertMeta(html, "name", "twitter:title", route.title);
  html = upsertMeta(html, "name", "twitter:description", route.description);
  html = upsertMeta(html, "name", "twitter:image", DEFAULT_OG_IMAGE);
  html = upsertCanonical(html, canonicalUrl);
  html = injectRouteSchema(html, route.schema);

  return html;
};

const routeOutputPath = (routePath) =>
  routePath === "/" ? path.join(DIST_DIR, "index.html") : path.join(DIST_DIR, routePath.slice(1), "index.html");

const main = async () => {
  const template = await fs.readFile(path.join(DIST_DIR, "index.html"), "utf8");

  await Promise.all(
    routes.map(async (route) => {
      const outputPath = routeOutputPath(route.path);
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await fs.writeFile(outputPath, renderRouteHtml(template, route), "utf8");
    }),
  );

  const notFoundHtml = renderRouteHtml(template, {
    path: "/404",
    title: "Stranica nije pronađena | ATLAGIĆ - ARTE LEGNO",
    description:
      "Tražena stranica nije pronađena. Vratite se na početnu stranicu ATLAGIĆ - ARTE LEGNO sajta.",
    keywords: "404, stranica nije pronađena, ATLAGIĆ ARTE LEGNO",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Stranica nije pronađena | ATLAGIĆ - ARTE LEGNO",
      url: `${SITE_URL}/404`,
      description:
        "Tražena stranica nije pronađena. Vratite se na početnu stranicu ATLAGIĆ - ARTE LEGNO sajta.",
      inLanguage: "bs-BA",
    },
  })
    .replace(
      /<meta name="robots" content="[^"]*"\s*\/?>/i,
      '<meta name="robots" content="noindex, nofollow" />',
    );

  await fs.writeFile(path.join(DIST_DIR, "404.html"), notFoundHtml, "utf8");
};

await main();
