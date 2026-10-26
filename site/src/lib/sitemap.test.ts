import assert from "node:assert/strict";
import test from "node:test";
import { LASTMOD, LOCALES, SITE_URL, SITEMAP_URL, renderRobots, renderSitemap } from "./sitemap.ts";

test("o sitemap cobre PT, EN e ES com lastmod da alteração do leitor", () => {
  const xml = renderSitemap();
  assert.match(xml, /<lastmod>2026-10-25<\/lastmod>/);
  assert.equal(LASTMOD, "2026-10-25");
  for (const item of LOCALES) {
    assert.ok(xml.includes(`<loc>${item.loc}</loc>`), item.loc);
    assert.ok(xml.includes(`hreflang="${item.hreflang}"`), item.hreflang);
  }
  assert.ok(xml.includes('hreflang="x-default"'));
  assert.equal(xml.includes("#pergunte"), false);
});

test("robots.txt aponta o sitemap canônico desta página", () => {
  const robots = renderRobots();
  assert.ok(robots.includes(`Sitemap: ${SITEMAP_URL}`));
  assert.ok(SITEMAP_URL.startsWith(SITE_URL));
});
