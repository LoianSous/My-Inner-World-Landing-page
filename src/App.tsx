import { useEffect } from 'react'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { Privacy } from './components/Privacy'

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useReveal()

  return (
    <div className="cosmos min-h-screen overflow-x-clip">
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-full bg-white px-4 py-2 text-ink-950 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Features />
        <HowItWorks />
        <Privacy />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
