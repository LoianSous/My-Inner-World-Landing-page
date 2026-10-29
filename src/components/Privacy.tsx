import { Icon, type IconName } from './Icon'

const POINTS: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'monitor',
    title: 'Dados no seu computador',
    text: 'Tarefas, emoções, diário, histórico e perfil ficam armazenados localmente, no dispositivo onde o app está instalado.',
  },
  {
    icon: 'offline',
    title: 'Sem conexão contínua',
    text: 'O aplicativo não exige internet para funcionar no dia a dia.',
  },
  {
    icon: 'user',
    title: 'Cadastro e login locais',
    text: 'Sua conta é criada no próprio computador, sem servidor externo.',
  },
]

export function Privacy() {
  return (
    <section id="privacidade" aria-labelledby="privacy-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-ink-800 via-ink-850 to-[#120f2e] p-7 sm:p-14">
          <div aria-hidden="true" className="orb -right-20 -bottom-24 size-72 bg-violet-600/30" />
          <div className="relative grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <span className="grid size-12 place-items-center rounded-2xl bg-emerald-300/10 text-emerald-300 ring-1 ring-emerald-300/20">
                <Icon name="lock" className="size-6" />
              </span>
              <h2 id="privacy-title" className="mt-6 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Um espaço só seu, de verdade.
              </h2>
              <p className="mt-4 leading-relaxed text-mist">
                O My Inner World foi feito para funcionar no seu computador. O que você escreve e registra não precisa sair dele.
              </p>
            </div>
            <ul className="space-y-6 lg:col-span-3">
              {POINTS.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/5 text-glow-blue">
                    <Icon name={p.icon} />
                  </span>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 leading-relaxed text-mist">{p.text}</p>
                  </div>
                </li>
              ))}
              <li className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm leading-relaxed text-mist">
                Os dados ficam em um banco local que não é criptografado. Por isso, proteger o computador com senha e
                manter cópias de segurança é importante.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
