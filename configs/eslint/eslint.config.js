import path from 'path';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser'
import globals from 'globals';
import perfectionist from 'eslint-plugin-perfectionist';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    'configs',
    'coverage',
    'dist',
  ]),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      perfectionist,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: [
          './tsconfig.json',
          './configs/typescript/tsconfig.app.json',
          './configs/typescript/tsconfig.node.json',
        ],
        tsconfigRootDir: path.join(import.meta.dirname, '../../'),
      },
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
          selector: 'variable',
        },
        {
          format: ['PascalCase'],
          prefix: ['A'],
          selector: 'class',
          modifiers: ['abstract'],
        },
        {
          format: ['PascalCase'],
          prefix: ['E'],
          selector: 'enum',
        },
        {
          format: ['PascalCase'],
          prefix: ['I'],
          selector: 'interface',
        },
        {
          format: ['PascalCase'],
          prefix: ['T'],
          selector: 'typeAlias',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'style',
            'type',
          ],
          type: 'natural',
          sortSideEffects: false,
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: 'ignore',
        },
      ],
      'max-len': [
        'error',
        {
          code: 120,
          ignoreComments: false,
          ignorePattern: '^import\\s.+$',
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
        },
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 1,
        },
      ],
      'object-curly-newline': [
        'error',
        {
          ExportDeclaration: {
            consistent: true,
            minProperties: 4,
          },
          ImportDeclaration: {
            consistent: true,
            minProperties: 4,
          },
          ObjectExpression: {
            consistent: true,
            minProperties: 4,
          },
          ObjectPattern: {
            consistent: true,
            minProperties: 4,
          },
        },
      ],
      'object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      'object-curly-spacing': ['error', 'always'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
    },
  },
]);
