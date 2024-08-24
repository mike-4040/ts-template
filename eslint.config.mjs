// @ts-check

import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  {
    ignores: [
      "lib", // Ignore the ts output folder
    ],
  },
  eslint.configs.recommended,
  ...tsEslint.configs.strict,
  ...tsEslint.configs.stylistic
);
