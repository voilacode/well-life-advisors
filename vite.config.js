import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' so the built site works from any folder or subpath
export default defineConfig({ base: './', plugins: [react()] });
