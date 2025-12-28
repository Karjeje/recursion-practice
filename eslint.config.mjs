import js from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base ESLint rules
  js.configs.recommended,

  // Disable rules that conflict with Prettier
  prettierConfig,

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",

      // Optional quality-of-life rules
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
]);
