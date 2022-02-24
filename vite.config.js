import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: (process.env.deploy_ghp === 'deploy' ? '/vue-vite-e2e/' : '/'),
  preview: {
    port: 6969,
  },
  plugins: [vue()]
})
