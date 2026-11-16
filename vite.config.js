import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// VITE_BASE controla o caminho do site:
//   "/"            -> repositório de usuário (<conta>.github.io)
//   "/nome-repo/"  -> repositório de projeto (<conta>.github.io/nome-repo/)
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/",
});
