import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Build optimizations
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animation': ['framer-motion'],
          'icons': ['lucide-react']
        }
      }
    },

    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,

    // Enable minification and tree shaking
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    },

    // Enable source maps for production debugging (optional)
    sourcemap: false
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react']
  },

  // Server optimizations
  server: {
    // Enable HMR
    hmr: {
      overlay: false // Disable error overlay for better UX
    }
  },

  // Asset optimization
  assetsInclude: ['**/*.webp', '**/*.avif'],

  // Preview optimizations
  preview: {
    port: 4173,
    strictPort: false
  }
})
