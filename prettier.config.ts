const config: import('prettier').Config = {
  trailingComma: 'all',
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  // Сортировка импортов
  importOrder: [
    '<TYPES>',
    '',
    '^react',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@/shared|@/entities|@/features|@/widgets|@/pages|@/app)(.*)$',
    '^[.].*(?<![.]s?css)$',
    '',
    '.s?css$',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  // Добавляет сортировку tailwind внутри функций
  tailwindFunctions: ['cva', 'cn', 'clsx'],
};

export default config;
