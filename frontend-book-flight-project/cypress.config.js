import { defineConfig } from 'cypress';
import viteConfig from './vite.config.js';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}'
  },
});