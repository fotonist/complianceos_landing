import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "coverage/**",
      "*.config.js",
      "*.config.cjs"
    ],
  },

  {
    rules: {
      "react/react-in-jsx-scope": "off",

      "@next/next/no-img-element": "warn",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }
      ],

      "@typescript-eslint/no-explicit-any": "warn",

      "prefer-const": "error",

      "no-console": [
        "warn",
        {
          allow: [
            "warn",
            "error"
          ]
        }
      ]
    }
  }
];

export default eslintConfig;