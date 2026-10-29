import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Caminho base do GitHub Pages: https://loiansous.github.io/My-Inner-World-Landing-page/
// O workflow define VITE_BASE_PATH automaticamente a partir do nome do repositório.
// Para domínio próprio, use VITE_BASE_PATH=/
const base = process.env.VITE_BASE_PATH ?? '/My-Inner-World-Landing-page/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
