import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [{
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}, ...compat.extends('next/core-web-vitals', 'next/typescript'), {
  plugins: {
    'jsx-a11y': jsxA11yPlugin, // 👈 Plugin eintragen
  },
  rules: {
    ...jsxA11yPlugin.configs.recommended.rules, // 👈 empfohlene Regeln übernehmen
  },
}];

export default eslintConfig;
