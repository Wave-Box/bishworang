
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      lg2: '1080px',
      xl: '1320px',
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
  // daisyUI config (optional)
  daisyui: {
    themes: false,
  },
}


