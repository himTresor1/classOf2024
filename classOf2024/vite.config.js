import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

var require = createRequire(import.meta.url);
var module = { exports: {} };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
});
