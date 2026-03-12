import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/CONFIRMAPP/' : '/', // En producción: GitHub Pages. En local: raíz
  plugins: [react()],
  server: {
    host: true, // Permite acceso desde la red local
    port: 5173, // Puerto por defecto de Vite
  },
})
