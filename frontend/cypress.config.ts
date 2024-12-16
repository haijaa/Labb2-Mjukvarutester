import { defineConfig } from "cypress";

export default defineConfig({
  retries: 1,
  e2e: {
    baseUrl: 'http://localhost:5173',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "cypress/components/**/*.cy.{js,ts,jsx,tsx}",

  },
  
});
