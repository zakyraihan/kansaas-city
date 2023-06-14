/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "#F97B22",
        oren: "#F97B22",
        item: '#1A1A1A',
        biru: '#93deff',
        abu: '#616571',
        putih: '#f7f7f7',
        "footerCol":"#27282B",
        "footerImgCol":"#343538",
      },
      backgroundImage: {
        pt: "url('/src/img/images.jpeg')",
        beritaimg: "url('/src/img/beritaimg.png')",
        login: "url('/src/img/loginimg.png')",
        login2: "url('/src/img/group 84.png')",
        patern: "url('/src/img/patern.png')",
        recycle: "url('/src/img/recycleimg-removebg-preview.png')",
        bg1: "url('/src/img/Group 88.png')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'geologica': ['Geologica', 'sans-serif'],
        'Joesefi': ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
],
};
