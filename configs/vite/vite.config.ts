import path from 'node:path';
import react from '@vitejs/plugin-react';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { defineConfig } from 'vite';
import { patchCssModules } from 'vite-css-modules';

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
      '@': path.join(__dirname, '../../', './src'),
    },
  },
});
