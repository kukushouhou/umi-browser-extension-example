import {defineConfig} from "umi";

export default defineConfig({
    npmClient: 'npm',
    plugins: [
        'umi-plugin-browser-extension',
    ],
    browserExtension: {
        targets: ['chrome', 'firefox']
    },
    jsMinifier: 'esbuild',
    jsMinifierOptions: {
        minify: false
    }
});
