import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    
    port: 3000,
  },
  plugins: [react()],
  resolve: {  // Cambia el @ en los imports por la ruta de src
    alias: [
      {
        find: '@', 
        replacement: path.resolve(__dirname, '/src')
      },
    ]
  }
})
