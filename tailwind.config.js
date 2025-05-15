const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Remove "./app/**/*.{js,ts,jsx,tsx,mdx}" if not using the App Router
  ],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        // Using Inter as the primary sans-serif font.
        // Ensure you have this font imported (e.g., via Google Fonts in your <Head> or globals.css)
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        // Example of a secondary/display font if needed
        // display: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Define a primary color palette for the brand
        primary: {
          light: '#6D28D9', // Lighter shade of Indigo/Purple
          DEFAULT: '#5B21B6', // Main Indigo/Purple (adjust as needed)
          dark: '#4C1D95',  // Darker shade
        },
        secondary: {
          light: '#EC4899', // Lighter Pink/Magenta
          DEFAULT: '#D946EF', // Main Pink/Magenta
          dark: '#C026D3',   // Darker shade
        },
        // Neutral colors - extending Tailwind's slate for consistency
        neutral: defaultTheme.colors.slate,
      },
      // Custom animation utilities (examples)
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'subtle-pulse': 'subtlePulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(0.98)' },
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), // Example: if you need form styling plugin
    // require('@tailwindcss/typography'), // Example: for prose styling
  ],
}; 