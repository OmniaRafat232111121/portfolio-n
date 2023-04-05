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
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
    },
    
    extend: {
      
        colors: {
          green: {
            DEFAULT: "#334155",
          },
          
             
          
        }
  },
  plugins: [],
}
}