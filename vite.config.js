import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        product500l: resolve(__dirname, 'ss-water-tank-500l.html'),
        product1000l: resolve(__dirname, 'ss-water-tank-1000l.html'),
        product2000l: resolve(__dirname, 'ss-water-tank-2000l.html'),
        product5000l: resolve(__dirname, 'ss-water-tank-5000l.html'),
        price: resolve(__dirname, 'ss-water-tank-price.html'),
        about: resolve(__dirname, 'manufacturer-india.html'),
        local: resolve(__dirname, 'ss-water-tank-jaipur.html'),
        blog: resolve(__dirname, 'blog.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
