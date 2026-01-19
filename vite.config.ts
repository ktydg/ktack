import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import { devtools } from '@tanstack/devtools-vite';
import tanstackRouter from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
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

  const meta = {
    image: './android-chrome-192x192.png',
    title: 'Ktack App',
    description: 'This app based on Ktack',
    url: env.VITE_WEBSITE_URL,
  };

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
      createHtmlPlugin({
        inject: {
          data: {
            metaTags: `<title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="${meta.image}" />
    <meta property="og:url" content="${meta.url}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${meta.image}" />`,
          },
        },
      }),
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
