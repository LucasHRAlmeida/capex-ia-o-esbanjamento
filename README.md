# capex-ia-o-esbanjamento

**Manifesto:** o capex de IA não se sustenta. Matemática do esbanjamento, cinco escolas adversariais, e a tese de que o valor real está no corpus — sem corpora não existem pesos.

**Revisão publicada:** o povo não alienou o título. O capex, por isso, não se sustenta.

## A página

A revisão interativa — tese, contas, revisão da matemática, esteira, simulador e estatuto — está em:

**https://lucashralmeida.github.io/capex-ia-o-esbanjamento/**

O código dessa página vive em [`site/`](site/) e o GitHub Actions publica no GitHub Pages a cada push em `main`.

O manifesto original, de página única, continua versionado em [`index.html`](index.html).

## A tese, em uma frase

> O povo não alienou o título. Quem administra o compute não ficou com o corpus. O capex que se anuncia para substituir quem teria de comprá-lo não se sustenta.

A formulação anterior, ainda no repositório:

> O que importa é a tecnologia **necessária**, o suficiente — não o exagero. Sem corpora não existem pesos.

O texto assinado está em [`TESE.md`](TESE.md).

## Os números (cenário base, US$ bi)

| | |
|---|---|
| Capex total 2023–2030 | 3.805 |
| Receita total | 755 |
| Gap acumulado | 3.050 |
| ROI acumulado em 2030 | 19,8% |
| Para empatar o acumulado | 5,0× a receita base |

O 2,7× só cobre um ano. A série está em [`dados.json`](dados.json).

## Estrutura

- `site/` — revisão “O título e o capex” (React, publicada no Pages)
- `index.html` — manifesto original, client-side, com Chart.js
- `TESE.md` — a tese forte, em texto puro
- `dados.json` — os números em JSON
- `.github/workflows/pages.yml` — build e deploy no GitHub Pages

## Assinatura

Dr. Lucas HR Almeida · Médico · Iniciativa VIA · Lavras · 24 de setembro de 2026

Nil satis nisi optimum.
