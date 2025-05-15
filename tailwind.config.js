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
        // New color palette
        mediumBlue: {
          light: '#60A5FA', // blue-400
          DEFAULT: '#3B82F6', // blue-500
          dark: '#2563EB',  // blue-600
        },
        brandCyan: {
          light: '#22D3EE', // cyan-400
          DEFAULT: '#06B6D4', // cyan-500
          dark: '#0891B2',  // cyan-600
        },
        brightOrange: {
          light: '#FB923C', // orange-400
          DEFAULT: '#F97316', // orange-500
          dark: '#EA580C',  // orange-600
        },
        
        // Updated primary and secondary colors to use the new palette
        primary: {
          light: '#60A5FA', // mediumBlue-light
          DEFAULT: '#3B82F6', // mediumBlue-DEFAULT
          dark: '#2563EB',  // mediumBlue-dark
        },
        secondary: {
          light: '#22D3EE', // brandCyan-light
          DEFAULT: '#06B6D4', // brandCyan-DEFAULT
          dark: '#0891B2',   // brandCyan-dark
        },
        accent: {
          light: '#FB923C', // brightOrange-light
          DEFAULT: '#F97316', // brightOrange-DEFAULT
          dark: '#EA580C',  // brightOrange-dark
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