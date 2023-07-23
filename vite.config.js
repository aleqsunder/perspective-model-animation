import path from 'path'
import { defineConfig } from "vite"

export default {
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, './index.html'),
            }
        }
    }
}