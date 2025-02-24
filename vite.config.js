import { defineConfig } from 'vite';

export default defineConfig({
  base: '/bimxr/',
  // base: '/bimxr/', // Reemplaza 'nombre-del-repo' con el nombre de tu repositorio en GitHub   './'
  // Otras configuraciones si es necesario
  server: { 
    proxy: { 
      '/api': { 
        target: 'https://github.com/', 
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, ''), 
        configure: (proxy, options) => { 
          proxy.on('proxyReq', (proxyReq, req, res) => { 
            proxyReq.setHeader('Access-Control-Allow-Origin', '*'); 
          }); 
        } 
      } 
    }
   }, 
   mimeTypes: { 
    'application/wasm': ['wasm'] 
  },

  build: {
    rollupOptions: {
      input: {
        main: './index.html',      // Primer archivo HTML
        secondary: './indexVR.html', // Segundo archivo HTML
      }
    }
  },
  publicDir: 'public' // Asegura que todo lo que esté en 'public' se copie a 'dist'
});