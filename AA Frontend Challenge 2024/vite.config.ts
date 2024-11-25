import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	publicDir: 'public', // Make sure Vite knows to look in the 'public' folder
	build: {
		outDir: 'dist',
	},
});
