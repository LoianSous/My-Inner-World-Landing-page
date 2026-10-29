import { useRef, useState } from 'react'
import logo from '../assets/logo.png'
import { APP_VERSION, SELLER_NAME, SUPPORT_EMAIL } from '../config/site'
import { LEGAL_DOCS, type LegalDoc } from '../content/legal'
import { Icon } from './Icon'

export function Footer() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [doc, setDoc] = useState<LegalDoc | null>(null)

  const openDoc = (d: LegalDoc) => {
    setDoc(d)
    dialogRef.current?.showModal()
  }

  return (
    <footer className="border-t border-white/5 bg-ink-950/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" width={32} height={32} className="size-8" />
            <span className="font-display font-semibold">My Inner World</span>
          </div>
          <p className="mt-3 text-sm text-mist">Seu mundo. Seu ritmo.</p>
          <p className="mt-1 text-xs text-mist/60">Aplicativo para Windows · v{APP_VERSION}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Suporte</h2>
          {SUPPORT_EMAIL ? (
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-3 inline-flex items-center gap-2 text-sm text-mist hover:text-white"
            >
              <Icon name="mail" className="size-4" />
              {SUPPORT_EMAIL}
            </a>
          ) : (
            <p className="mt-3 text-sm text-mist">Canal de suporte em breve.</p>
          )}
        </div>

        <nav aria-label="Documentos legais">
          <h2 className="text-sm font-semibold">Informações</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {LEGAL_DOCS.map((d) => (
              <li key={d.id}>
                <button
                  type="button"
                  onClick={() => openDoc(d)}
                  className="text-mist underline-offset-4 hover:text-white hover:underline"
                >
                  {d.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-mist/60">
        © {new Date().getFullYear()} My Inner World{SELLER_NAME && ` · ${SELLER_NAME}`}
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="legal-title"
        onClose={() => setDoc(null)}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
        className="m-auto max-h-[85vh] w-[min(42rem,calc(100%-2rem))] rounded-2xl border border-white/10 bg-ink-850 p-0 text-slate-100 shadow-2xl"
      >
        {doc && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h2 id="legal-title" className="font-display text-2xl font-semibold">
                {doc.title}
              </h2>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="grid size-9 shrink-0 place-items-center rounded-full text-mist hover:bg-white/5 hover:text-white"
                aria-label="Fechar"
              >
                <Icon name="close" />
              </button>
            </div>
            <div className="mt-6 space-y-6">
              {doc.sections.map((s) => (
                <section key={s.heading}>
                  <h3 className="font-semibold">{s.heading}</h3>
                  {s.body.map((p) => (
                    <p key={p} className="mt-2 text-sm leading-relaxed text-mist">
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </footer>
  )
}
