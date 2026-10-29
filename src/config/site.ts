// ─────────────────────────────────────────────────────────────
// Configuração central do site. Edite apenas este arquivo para
// preço, checkout, contato e capturas de tela.
// ─────────────────────────────────────────────────────────────

/** Versão atual do aplicativo desktop. */
export const APP_VERSION = '0.4.0'

/**
 * Preço único em reais. Use `null` enquanto o valor não estiver definido;
 * a seção de compra exibirá "Valor em breve".
 */
export const PRICE_BRL: number | null = 29.9

/**
 * URL do checkout (futuramente, o link HTTPS real do Lemon Squeezy).
 * Enquanto estiver vazia, o botão de compra fica desabilitado
 * e a página exibe "Vendas em breve".
 */
export const CHECKOUT_URL = ''

/** E-mail de suporte exibido no rodapé e nas políticas. Vazio = "em breve". */
export const SUPPORT_EMAIL = 'loian9109@gmail.com'

/** Nome do responsável pela venda (pessoa ou empresa), usado nas políticas. */
export const SELLER_NAME = 'Loian de Souza Araujo'

/** Data da última atualização das políticas (texto livre). */
export const LEGAL_UPDATED_AT = '29/10/2026'

/**
 * Capturas reais do aplicativo. Coloque os arquivos em `public/screenshots/`
 * e informe aqui o nome do arquivo (ex.: 'hero.png').
 * Enquanto o valor for `null`, um espaço reservado identificado é exibido.
 */
export type ScreenshotKey = 'hero' | 'tasks' | 'emotions' | 'diary' | 'history' | 'profile' | 'privacy'

export const SCREENSHOTS: Record<ScreenshotKey, string | null> = {
  // Capturas reais (v0.4.0, perfil fictício "Marina Costa"), 1600×1000 WebP.
  hero: 'hero.webp',
  tasks: 'tarefas.webp',
  emotions: 'emocoes.webp',
  diary: 'diario.webp',
  history: 'historico.webp',
  profile: 'perfil.webp',
  privacy: 'privacidade.webp',
}

export const isCheckoutReady = CHECKOUT_URL.trim().startsWith('https://')

export function screenshotUrl(key: ScreenshotKey): string | null {
  const file = SCREENSHOTS[key]
  return file ? `${import.meta.env.BASE_URL}screenshots/${file}` : null
}

export function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
