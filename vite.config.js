import path from 'path'

export default {
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, './index.html'),
            }
        }
    }
}