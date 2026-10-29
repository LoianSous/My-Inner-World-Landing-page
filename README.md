# My Inner World — Landing Page

Site estático de divulgação e venda do aplicativo Windows **My Inner World**.
React + TypeScript + Vite + Tailwind CSS. Sem backend.

## Comandos locais

```bash
npm install        # instala dependências
npm run dev        # servidor local em http://localhost:5173/My-Inner-World-Landing-page/
npm run typecheck  # checagem de tipos
npm run lint       # ESLint
npm run build      # gera a pasta dist/
npm run preview    # serve o build localmente
```

## Onde configurar

Tudo em **`src/config/site.ts`**:

| Constante        | Uso                                                               |
| ---------------- | ----------------------------------------------------------------- |
| `PRICE_BRL`      | Preço único em reais. `null` exibe "Valor em breve".              |
| `CHECKOUT_URL`   | Link HTTPS do checkout (Lemon Squeezy). Vazio = botão desabilitado e "Vendas em breve". |
| `SUPPORT_EMAIL`  | E-mail de suporte (rodapé e políticas).                           |
| `SELLER_NAME`    | Nome do responsável pela venda (usado nas políticas).             |
| `LEGAL_UPDATED_AT` | Data de atualização das políticas.                              |
| `SCREENSHOTS`    | Nomes dos arquivos de captura em `public/screenshots/`.           |
| `APP_VERSION`    | Versão do aplicativo exibida no site.                             |

Textos das políticas (Privacidade, Termos, Reembolso): **`src/content/legal.ts`**.

### Capturas de tela

1. Salve as capturas reais em `public/screenshots/` (ex.: `hero.png`, 1600×1000, proporção 16:10).
2. Em `SCREENSHOTS`, troque `null` pelo nome do arquivo: `hero: 'hero.png'`.
3. Use dados fictícios de exemplo no app antes de capturar (nada de diário ou emoções reais).

## Publicar no GitHub Pages

Repositório: https://github.com/LoianSous/My-Inner-World-Landing-page
Endereço: https://loiansous.github.io/My-Inner-World-Landing-page/

1. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Envie o conteúdo desta pasta para a branch `main`.
3. Cada push na `main` executa `.github/workflows/deploy.yml` (lint + build + publicação de `dist/`).

O caminho base é definido pelo workflow com o nome do repositório
(`VITE_BASE_PATH=/My-Inner-World-Landing-page/`, com maiúsculas). Localmente, o padrão é o mesmo
(veja `vite.config.ts`). Para domínio próprio, defina `VITE_BASE_PATH: /` no workflow.

> Nunca adicione o instalador `.exe`, bancos SQLite, backups ou credenciais a este repositório.
> O `.gitignore` já bloqueia esses arquivos. Entregue o instalador pela plataforma de pagamento.
