module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        'home': "url('./assets/home.png')",

      },
      fontFamily:{
        'cocktail-name': ['"MuseoModerno"', 'cursive']
        
      },
      colors: {
        rosebrown: {
          100: 'rgb(187,152,148)',
          200: 'rgb(224,206,206)',
          300: 'rgb(146,123,144)',
          500: 'rgb(87,71,85)'
        },
        dark: {
          100: '#757f9a'
        },
        light:{
          100: '#d7dde8'
        }
      }
    }
  },
  plugins: [],
}
