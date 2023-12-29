import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

import coloradix, { gray } from "@coloradix/tailwindcss";

const radix = coloradix({ gray }).alias({ neutral: "gray", primary: "gray" }).build();

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { colors: radix.colors, fontFamily: { mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono] } },
  plugins: [radix.plugin],
} satisfies Config;
