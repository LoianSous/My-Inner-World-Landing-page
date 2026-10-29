import { APP_VERSION } from '../config/site'
import { Icon } from './Icon'
import { Screenshot } from './Screenshot'

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-14 pb-20 sm:pt-24 sm:pb-28">
      <div aria-hidden="true" className="orb -top-24 right-[8%] size-80 bg-indigo-600/40" />
      <div aria-hidden="true" className="orb top-1/2 -left-24 size-72 bg-sky-500/25 [animation-delay:-6s]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-mist">
            <span className="breathe size-1.5 rounded-full bg-sun" aria-hidden="true" />
            Aplicativo para Windows · versão {APP_VERSION}
          </p>

          <h1
            id="hero-title"
            className="mt-7 font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-7xl"
          >
            Seu mundo. <span className="text-aurora">Seu ritmo.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist text-pretty sm:text-xl">
            Organize suas tarefas, acompanhe suas emoções e tenha um espaço só seu.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#funcionalidades"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-glow-blue via-indigo-400 to-glow-violet px-7 py-3.5 font-semibold text-ink-950 shadow-[0_10px_40px_-10px_rgb(143_179_255/0.7)] transition hover:brightness-110"
            >
              Conhecer o My Inner World
              <Icon name="arrow" className="size-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
            </a>
            <a href="#compra" className="rounded-full px-5 py-3.5 text-sm text-mist hover:text-white">
              Ver preço
            </a>
          </div>
        </div>

        <div className="reveal relative mx-auto mt-16 max-w-5xl sm:mt-20">
          <div
            aria-hidden="true"
            className="absolute -inset-x-8 -inset-y-6 rounded-[2.5rem] bg-gradient-to-b from-indigo-500/20 via-violet-500/10 to-transparent blur-2xl"
          />
          <Screenshot
            shot="hero"
            priority
            className="relative"
            alt="Painel principal do My Inner World com perfil, avatar 3D luminoso e emoções"
            hint="Painel principal com o avatar 3D luminoso e os post-its de tarefas."
          />
        </div>
      </div>
    </section>
  )
}
