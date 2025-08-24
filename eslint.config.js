import { defineConfig } from "eslint/config";
import * as tsParser from "@typescript-eslint/parser";

export default defineConfig([
	{
		ignores: [
		'node_modules/',
		'build'
		],
	rules: {
		"no-unused-vars": "error",
		// semi: "error",
		// "prefer-const": "error",
	},
		//     // Use the TypeScript parser so .ts/.tsx are parsed correctly (with JSX)
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

	},
]);
