import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/coffee-shop/",
  server: {
    port: 3001,
  },
});
