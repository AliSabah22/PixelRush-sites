module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' if you prefer OS-level settings
  theme: {
    extend: {
      fontFamily: {
        // Add your custom fonts here
        // sans: ['Inter', 'sans-serif'], // Example
      },
      colors: {
        // Add custom colors
        // primary: '#FF6347',
      },
      animation: {
        // Add custom animations
        // 'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        // Define keyframes for custom animations
        // fadeIn: {
        //   '0%': { opacity: 0 },
        //   '100%': { opacity: 1 },
        // },
      },
    },
  },
  plugins: [],
}; 