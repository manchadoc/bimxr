import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  // base: '/bimxr/', // Reemplaza 'nombre-del-repo' con el nombre de tu repositorio en GitHub
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
  }

});