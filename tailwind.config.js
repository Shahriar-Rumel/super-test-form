module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1240px',
        '2xl': '1440px'
      },
      boxShadow: {
        primary: '0px 4px 25px 0px rgba(141, 141, 141, 0.05)',
        secondary: '0px 4px 25px 0px rgba(29, 78, 216, 0.05)'
      },
      colors: {
        primary: '#5845DD',
        primaryLight: '#817CA5',
        primaryDark: '#413C5F'
      },
      fontFamily: {
        sans: ['Inter', 'sans-sherif'],
        sherif: ['Montserrat', 'serif'],
        mono: ['Menlo', 'monospace']
      }
    }
  }
};
