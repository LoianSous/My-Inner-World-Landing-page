import { useState } from 'react'
import logo from '../assets/logo.png'
import { Icon } from './Icon'

const LINKS = [
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#privacidade', label: 'Privacidade' },
  { href: '#compra', label: 'Compra' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-900/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5 rounded-lg" onClick={() => setOpen(false)}>
          <img src={logo} alt="" width={32} height={32} className="size-8" />
          <span className="font-display text-[15px] font-semibold tracking-tight">My Inner World</span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm text-mist">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-3.5 py-2 transition-colors hover:bg-white/5 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full text-mist hover:bg-white/5 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Principal" className="border-t border-white/5 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-mist hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
