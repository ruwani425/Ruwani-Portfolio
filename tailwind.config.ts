import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        // 'sm' is 640px
        // 'md' is 768px
        // 'lg' is 1024px
        // 'xl' is 1280px
        '2xl': '1440px', // Explicitly targeting the 1440px request as 2xl or just ensuring layout works there
      },
    },
  },
  plugins: [],
};
export default config;