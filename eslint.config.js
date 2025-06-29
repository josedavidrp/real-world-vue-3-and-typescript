import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tsParser from '@typescript-eslint/parser'
import pluginTs from '@typescript-eslint/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,ts,tsx,vue}'], // Add ts/tsx here
    languageOptions: {
      parser: tsParser, // Use TS parser
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.browser,
      },
      plugins: {
        '@typescript-eslint': pluginTs,
        vue: pluginVue,
      },
      rules: {
        // Add any TS specific rules or overrides here
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginVue.configs['flat/essential'].rules,
      // You can add TS plugin recommended rules here too
    },
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  skipFormatting,
])
