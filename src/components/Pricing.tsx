import logo from '../assets/logo.png'
import { APP_VERSION, CHECKOUT_URL, formatPrice, isCheckoutReady, PRICE_BRL } from '../config/site'
import { Icon } from './Icon'

const INCLUDED = [
  'Compatível com Windows x64',
  'Tarefas, emoções, avatar 3D, diário e histórico',
  'Funciona offline, com dados no seu computador',
  'Cadastro e login locais',
  'Pagamento único, sem assinatura',
]

export function Pricing() {
  return (
    <section id="compra" aria-labelledby="pricing-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-glow-blue uppercase">Compra</p>
          <h2 id="pricing-title" className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Seu, de uma vez.
          </h2>
        </div>

        <div className="reveal relative mx-auto mt-14 max-w-lg">
          <div
            aria-hidden="true"
            className="absolute -inset-px rounded-[2rem] bg-gradient-to-b from-glow-blue/50 via-glow-violet/20 to-transparent"
          />
          <div className="relative rounded-[2rem] bg-ink-850 p-7 sm:p-10">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" width={44} height={44} className="size-11" />
              <div>
                <p className="font-display font-semibold">My Inner World</p>
                <p className="text-sm text-mist">Windows x64 · versão {APP_VERSION}</p>
              </div>
            </div>

            <p className="mt-8 font-display text-5xl font-semibold tracking-tight">
              {PRICE_BRL !== null ? (
                <>
                  {formatPrice(PRICE_BRL)}
                  <span className="mt-2 block font-sans text-base font-normal tracking-normal text-mist sm:mt-0 sm:ml-3 sm:inline">
                    — pagamento único
                  </span>
                </>
              ) : (
                <span className="text-3xl text-mist">Valor em breve</span>
              )}
            </p>

            <ul className="mt-8 space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-slate-200">
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-glow-cyan" />
                  {item}
                </li>
              ))}
            </ul>

            {isCheckoutReady ? (
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sun to-amber-400 px-6 py-4 font-semibold text-ink-950 shadow-[0_10px_40px_-12px_rgb(251_191_60/0.8)] transition hover:brightness-110"
              >
                Comprar My Inner World
                <span className="sr-only">(abre a página de pagamento em nova aba)</span>
              </a>
            ) : (
              <>
                <button
                  type="button"
                  disabled
                  aria-describedby="checkout-status"
                  className="mt-10 w-full cursor-not-allowed rounded-full border border-white/10 bg-white/5 px-6 py-4 font-semibold text-mist"
                >
                  Comprar My Inner World
                </button>
                <p id="checkout-status" className="mt-3 text-center text-sm text-mist">
                  Vendas em breve
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
