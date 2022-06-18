module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js', '.next', '.cache', 'build', 'dist', 'out'],
  settings: {
    tailwindcss: {
      officialSorting: true,
    },
  },
  rules: {
    'react/jsx-key': 'off',
    'no-unused-vars': 'off',
    'no-console': 'warn',
    "tailwindcss/no-custom-classname": "off",
    '@next/next/no-html-link-for-pages': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^@?\\w', '^\\u0000'],
          ['^@/components', '^@/hooks', '^@/stores'],
          ['^@/config', '^@/utils', '^@/content', '^@/styles'],
          ['^~/types', '^.+\\.s?css$', '^@/', '^~/'],
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          ['^'],
        ],
      },
    ],
  },
  globals: {
    React: true,
    JSX: true,
  },
}
