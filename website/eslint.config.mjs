import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "off", // Allow <img> instead of <Image />
      "@typescript-eslint/no-explicit-any": "off", // Disable 'any' type errors
      "react-hooks/exhaustive-deps": "off", // Ignore useEffect dependency warnings
      "@typescript-eslint/no-unused-expressions": "off", // Disable unused expressions error
    }
  }
];

export default eslintConfig;
