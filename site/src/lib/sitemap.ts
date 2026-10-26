/** URLs canônicas desta página no domínio da Iniciativa VIA. */

export const SITE_ORIGIN = "https://iniciativa-via.com";
export const SITE_PATH = "/capex-ia-o-esbanjamento/";
export const SITE_URL = `${SITE_ORIGIN}${SITE_PATH}`;

export const SITEMAP_URL = `${SITE_URL}sitemap.xml`;

/** Última alteração significativa do HTML público (leitor de FAQ). */
export const LASTMOD = "2026-10-25";

export type LocaleHref = {
  lang: "pt" | "en" | "es";
  hreflang: "pt-BR" | "en" | "es";
  loc: string;
};

export const LOCALES: readonly LocaleHref[] = [
  { lang: "pt", hreflang: "pt-BR", loc: SITE_URL },
  { lang: "en", hreflang: "en", loc: `${SITE_URL}?lang=en` },
  { lang: "es", hreflang: "es", loc: `${SITE_URL}?lang=es` },
];

function escapeXml(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function alternateLinks(): string {
  const links = LOCALES.map(
    (item) =>
      `    <xhtml:link rel="alternate" hreflang="${item.hreflang}" href="${escapeXml(item.loc)}" />`,
  );
  links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(SITE_URL)}" />`,
  );
  return links.join("\n");
}

function urlEntry(loc: string): string {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>weekly</changefreq>
${alternateLinks()}
  </url>`;
}

export function renderSitemap(): string {
  const urls = LOCALES.map((item) => urlEntry(item.loc)).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

export function renderRobots(): string {
  return `# Página CAPEX — Iniciativa VIA
# O robots.txt que o Googlebot lê no domínio é o da raiz:
#   https://iniciativa-via.com/robots.txt
# Este arquivo acompanha o artefato do Pages e declara o mapa desta página.

User-agent: *
Allow: /

Sitemap: ${SITEMAP_URL}
`;
}
