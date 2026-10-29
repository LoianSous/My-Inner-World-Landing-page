import { screenshotUrl, type ScreenshotKey } from '../config/site'

type Props = {
  shot: ScreenshotKey
  alt: string
  /** O que a captura real deve mostrar (exibido no espaço reservado). */
  hint: string
  className?: string
  priority?: boolean
}

/** Moldura de janela Windows com a captura real ou um espaço reservado identificado. */
export function Screenshot({ shot, alt, hint, className = '', priority = false }: Props) {
  const src = screenshotUrl(shot)

  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-white/10 bg-ink-850/80 shadow-[0_30px_80px_-30px_rgb(99_102_241/0.45)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/5 bg-ink-800/80 px-4 py-2 text-[11px] text-mist/70">
        <span className="font-medium tracking-wide">My Inner World</span>
        <span aria-hidden="true" className="flex gap-3 font-mono">
          <span>—</span>
          <span>▢</span>
          <span>✕</span>
        </span>
      </div>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="block aspect-[16/10] w-full object-cover object-top"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      ) : (
        <div
          role="img"
          aria-label={`Espaço reservado para captura de tela: ${alt}`}
          className="relative grid aspect-[16/10] w-full place-items-center p-6 text-center"
        >
          <div
            aria-hidden="true"
            className="absolute inset-3 rounded-xl border border-dashed border-glow-blue/25 bg-[repeating-linear-gradient(135deg,transparent_0_14px,rgb(143_179_255/0.03)_14px_28px)]"
          />
          <div className="relative max-w-xs">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-glow-blue/80 uppercase">
              Captura real pendente
            </p>
            <p className="mt-2 text-sm text-slate-300">{hint}</p>
            <p className="mt-3 font-mono text-[11px] break-all text-mist/60">
              public/screenshots/ → SCREENSHOTS.{shot}
            </p>
          </div>
        </div>
      )}
    </figure>
  )
}
