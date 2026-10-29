import type { ScreenshotKey } from '../config/site'
import { Icon, type IconName } from './Icon'
import { Screenshot } from './Screenshot'

type Feature = {
  n: string
  icon: IconName
  title: string
  text: string
  shot: ScreenshotKey
  hint: string
  accent: string
}

const MAIN: Feature[] = [
  {
    n: '01',
    icon: 'note',
    title: 'Tarefas em post-its',
    text: 'Anote o que precisa fazer em post-its coloridos e arraste-os livremente pelo painel. Sua organização, do jeito que faz sentido para você.',
    shot: 'tasks',
    hint: 'Painel de tarefas com post-its coloridos espalhados.',
    accent: 'text-amber-300 bg-amber-300/10 ring-amber-300/20',
  },
  {
    n: '02',
    icon: 'heart',
    title: 'Emoções e avatar 3D',
    text: 'Registre como você está se sentindo e acompanhe isso com um avatar 3D luminoso, masculino ou feminino, que faz parte do seu espaço.',
    shot: 'emotions',
    hint: 'Registro de emoção com o avatar 3D em destaque.',
    accent: 'text-violet-300 bg-violet-300/10 ring-violet-300/20',
  },
  {
    n: '03',
    icon: 'book',
    title: 'Diário pessoal',
    text: 'Um lugar tranquilo para escrever sobre o seu dia, seus pensamentos e o que importa para você.',
    shot: 'diary',
    hint: 'Tela do diário pessoal (use apenas texto de exemplo).',
    accent: 'text-sky-300 bg-sky-300/10 ring-sky-300/20',
  },
]

const MORE: Feature[] = [
  {
    n: '04',
    icon: 'chart',
    title: 'Histórico e evolução',
    text: 'Veja suas atividades e emoções ao longo do tempo e perceba seus próprios padrões.',
    shot: 'history',
    hint: 'Tela de histórico de atividades e emoções.',
    accent: 'text-cyan-300 bg-cyan-300/10 ring-cyan-300/20',
  },
  {
    n: '05',
    icon: 'user',
    title: 'Perfil personalizado',
    text: 'Crie seu perfil, escolha seu avatar e deixe o aplicativo com a sua cara.',
    shot: 'profile',
    hint: 'Tela de perfil com escolha de avatar.',
    accent: 'text-pink-300 bg-pink-300/10 ring-pink-300/20',
  },
  {
    n: '06',
    icon: 'lock',
    title: 'Privacidade e uso offline',
    text: 'Seus dados e backups ficam no seu computador, com cadastro e login locais. O app funciona sem conexão contínua.',
    shot: 'privacy',
    hint: 'Configurações com dados e backups locais.',
    accent: 'text-emerald-300 bg-emerald-300/10 ring-emerald-300/20',
  },
]

function Badge({ f }: { f: Feature }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`grid size-10 place-items-center rounded-xl ring-1 ${f.accent}`}>
        <Icon name={f.icon} />
      </span>
      <span className="font-mono text-xs text-mist/60">{f.n}</span>
    </div>
  )
}

export function Features() {
  return (
    <section id="funcionalidades" aria-labelledby="features-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-glow-blue uppercase">Funcionalidades</p>
          <h2 id="features-title" className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Tudo o que é seu, em um só lugar.
          </h2>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {MAIN.map((f, i) => (
            <article key={f.n} className="reveal grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-2' : ''}`}>
                <Badge f={f} />
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{f.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-mist">{f.text}</p>
              </div>
              <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-1' : ''}`}>
                <Screenshot shot={f.shot} alt={f.title} hint={f.hint} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {MORE.map((f) => (
            <article
              key={f.n}
              className="reveal flex flex-col rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-6"
            >
              <Badge f={f} />
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-3 mb-6 leading-relaxed text-mist">{f.text}</p>
              <Screenshot shot={f.shot} alt={f.title} hint={f.hint} className="mt-auto" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
