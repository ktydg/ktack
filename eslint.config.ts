import eslint from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import pluginRouter from '@tanstack/eslint-plugin-router';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', '**/routerTree.gen.ts']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    extends: [
      eslint.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      pluginRouter.configs['flat/recommended'],
      pluginQuery.configs['flat/recommended'],
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      reactRefresh.configs.vite,
      'react-hooks/recommended',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        parser: tseslint.parser,
      },
    },
    rules: {
      'comma-dangle': ['warn', 'always-multiline'],
      'object-curly-spacing': ['warn', 'always'],
      'no-console': ['error', { allow: ['error', 'warn'] }],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true, // Функции в конец
          shorthandFirst: true, // Короткие пропсы (boolean) первыми
          ignoreCase: true, // Игнорировать регистр
          reservedFirst: true, // Зарезервированные пропсы (key, ref) в начало
          multiline: 'last',
        },
      ],
    },
  },
]);
