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
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },

    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,

    // Enable minification and tree shaking
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Remove specific console methods
        passes: 2 // Multiple passes for better compression
      },
      format: {
        comments: false // Remove comments
      }
    },

    // Enable source maps for production debugging (optional)
    sourcemap: false,
    
    // Target modern browsers for smaller bundle
    target: 'es2020',
    
    // CSS code splitting
    cssCodeSplit: true
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
    },
    // Warm up commonly used files
    warmup: {
      clientFiles: [
        './src/main.jsx',
        './src/pages/Home.jsx',
        './src/components/OptimizedImage.jsx'
      ]
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
