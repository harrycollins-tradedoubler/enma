module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f7f7f4',
        panel: '#ffffff',
        ink: '#11181a',
        muted: '#4f5b60',
        line: '#d9ddd8',
        accent: '#246f5d'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 48px -36px rgba(14, 21, 20, 0.34)',
        card: '0 18px 36px -30px rgba(14, 21, 20, 0.26)'
      }
    }
  },
  plugins: []
};
