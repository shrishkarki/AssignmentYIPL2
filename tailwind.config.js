/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    // colors:{
    //   "tertiary-dark":'#458FF6',
    //   "tertiary-light":'#7D7987',
    //   "grey-dark":'#1F1534',
    //   "blue-dark":'#5393F3',
    //   "white":'#FFFFFF',
    //   "black":"#000000"
    // },
    extend: {
     
      flex:{
        '3/3':"0 1 calc(33% - 19px)",
        '2/3':"0 1 calc(50% - 16px)",
        
        '50':'0 1 50%'
      },
      screens: {
        'ml': '992px',
      },
      colors:{
          "tertiary-dark":'#458FF6',
          "tertiary-light":'#7D7987',
          "grey-dark":'#1F1534',
          "blue-dark":'#5393F3',
          "white":'#FFFFFF',
          "black":"#000000",
          // "dark-blue":"#67C3F3",
          // "light-blue":'#5A98F2',
          "carousel-blue":"#5B9BF3"
        },
        gridTemplateColumns: {
          
          'four-auto': 'auto auto auto auto',
  
          
        }
  

    },
  },
  plugins: [],
}

