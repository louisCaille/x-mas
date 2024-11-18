import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

function publicPath() {
    if (process.env.CI_PAGES_URL) {
        return new URL(process.env.CI_PAGES_URL).pathname
    } else {
        return '/'
    }
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    base: publicPath(),
    build: {
        outDir: process.env.CI_PAGES_URL ? 'public' : 'dist'
    }
})
