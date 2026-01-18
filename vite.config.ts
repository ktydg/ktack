import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import { devtools } from '@tanstack/devtools-vite';
import tanstackRouter from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  if (!env.VITE_SERVER_URL) {
    throw new Error('Переменная окружения VITE_SERVER_URL отсутствует');
  }
  if (!env.VITE_WEBSITE_URL) {
    throw new Error('Переменная окружения VITE_WEBSITE_URL отсутствует');
  }

  return {
    plugins: [
      devtools(),
      tanstackRouter({
        autoCodeSplitting: true,
        routesDirectory: './src/pages',
        generatedRouteTree: './src/app/routerTree.gen.ts',
      }),
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
      tailwindcss(),
      svgr(),
    ],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          secure: false,
          target: env.VITE_SERVER_URL,
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  };
});
