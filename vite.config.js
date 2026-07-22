import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '');
        return path.resolve(__dirname, 'src/assets', filename);
      }
    }
  };
}

export default defineConfig({
  plugins: [
  figmaAssetResolver(),
  react(),
  tailwindcss()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'lottie-web': path.resolve(__dirname, 'node_modules/lottie-web/build/player/lottie_light.js')
    }
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    chunkSizeWarningLimit: 200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'vendor-react';
            }
            if (id.includes('motion') || id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            if (id.includes('lottie-web') || id.includes('lottie-react')) {
              return 'vendor-lottie';
            }
            return 'vendor-misc';
          }
        }
      }
    }
  }
});