import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { patchCssModules } from 'vite-css-modules';
import path from 'node:path';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 500,
    cssMinify: 'lightningcss',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    sourcemap: 'hidden',
  },
  css: {
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
    modules: {
      generateScopedName: '[local]-[name]_[hash:base64:5]',
      localsConvention: 'camelCaseOnly',
      scopeBehaviour: 'local',
    },
    transformer: 'lightningcss',
  },
  plugins: [
    patchCssModules(),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
