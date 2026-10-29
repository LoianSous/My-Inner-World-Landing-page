import { Icon, type IconName } from './Icon'

const STEPS: { icon: IconName; title: string; text: string }[] = [
  { icon: 'card', title: 'Adquira o aplicativo', text: 'Pagamento único, sem assinatura.' },
  { icon: 'download', title: 'Instale no Windows', text: 'Você recebe o instalador após a confirmação da compra.' },
  { icon: 'sparkle', title: 'Crie seu perfil e comece a usar', text: 'Cadastro local, escolha do avatar e pronto.' },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="how-title" className="relative py-24 sm:py-32">
      <div className="hairline mx-auto mb-24 max-w-4xl sm:mb-32" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-glow-blue uppercase">Como funciona</p>
          <h2 id="how-title" className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Três passos. Nada além.
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute top-7 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-glow-cyan/40 via-glow-blue/40 to-glow-violet/40 md:block"
          />
          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="reveal flex flex-col items-center text-center">
                <span className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-ink-850 text-glow-blue shadow-[0_0_30px_-6px_rgb(143_179_255/0.5)]">
                  <Icon name={s.icon} className="size-6" />
                </span>
                <span className="mt-6 font-mono text-xs text-mist/60">Etapa {i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-xs text-mist">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
