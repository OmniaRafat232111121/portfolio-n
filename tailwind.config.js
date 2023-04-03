/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Kaushan': ['Kaushan Script'],
      'Nunito':['Nunito Sans']
      
    },
    
    extend: {
      
        colors: {
          green: {
            DEFAULT: "#f87171",
          },
        }
  },
  plugins: [],
}
}