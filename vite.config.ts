import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    target: 'es2022',
    // remove: minify: 'terser'
    // remove: terserOptions: { ... }
    // (esbuild is the default minifier)
    rollupOptions: {
      output: {
        manualChunks: {
          'mural-controller': ['./src/CrownMuralController.ts']
        }
      }
    }
  },
  // esbuild-specific options live at top level in Vite config:
  esbuild: {
    drop: ['console', 'debugger'],   // like drop_console + drop_debugger
    pure: ['console.log']            // like pure_funcs: ['console.log']
  },
  server: { port: 3000 }
})
