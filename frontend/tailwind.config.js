module.exports = {
  presets: [
    require('frappe-ui/src/utils/tailwind.config')
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/frappe-ui/src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        
        light: '#4f7ff0',
        DEFAULT: '#4071e4',
        dark: '#2b58bf',
      },
      secondary: '#ecc94b',
      
    },
    extend: {},
  },
  plugins: [],
}
