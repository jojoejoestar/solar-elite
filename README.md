# Solar Elite

Site institucional da Solar Elite — engenharia fotovoltaica.

Landing page em Next.js com scroll cinematográfico (GSAP + Lenis) e um simulador de retorno financeiro no cliente.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS 3
- GSAP + Lenis

## Setup

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Função |
| --- | --- |
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | build de produção |
| `npm run start` | serve o build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run images` | baixa imagens de stock para `public/images` |

## Estrutura

```
app/                 rotas, layout e CSS global
src/components/      seções da landing, motion e UI
src/data/            copy, métricas, contato e navegação
src/lib/             GSAP, Lenis, ROI e helpers
src/hooks/           orquestração de scroll por seção
public/images/       assets estáticos
scripts/             download das imagens de referência
```

Conteúdo de marketing vive em `src/data`. Componentes só montam layout e movimento.

## Observações

O formulário de simulação (`CTASection`) confirma o envio com um toast. Não há API neste repositório — o ponto de integração é o `handleSubmit` dessa seção.

Fotos de cases e avatares em `public/images` são ilustrativas (Unsplash). Troque pelos arquivos reais antes de publicar em produção.

## Licença

MIT. Veja [LICENSE](LICENSE).
