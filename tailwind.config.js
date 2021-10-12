module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        "cWhite": "hsl(0, 0%, 100%)",
        "strongCyan"        : "hsl(172, 67%, 45%)",
        "veryDarkCyan"      : "hsl(183, 100%, 15%)",
        "darkerGrayishCyan" : "hsl(186, 14%, 43%)",
        "darkGrayishCyan"   : "hsl(184, 14%, 56%)",
        "lighterGrayishCyan": "hsl(185, 41%, 84%)",
        "lightGrayishCyan"  : "hsl(189, 41%, 97%)",
      },
        textColor   :{
        "cWhite": "hsl(0, 0%, 100%)",
        "strongCyan"        : "hsl(172, 67%, 45%)",
        "veryDarkCyan"      : "hsl(183, 100%, 15%)",
        "darkerGrayishCyan" : "hsl(186, 14%, 43%)",
        "darkGrayishCyan"   : "hsl(184, 14%, 56%)",
        "lightGrayishCyan"  : "hsl(185, 45%, 84%)",
        "lighterGrayishCyan": "hsl(189, 41%, 97%)",
      },
      fontSize: {
        24: ['24px', '32px'],
      },
      fontFamily: {
        'spaceMono': ['"Space Mono"', 'monospace']
      },
      letterSpacing: {
        custom : "0.4em"
      },
      fontWeight: {
        custom: "550"
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
