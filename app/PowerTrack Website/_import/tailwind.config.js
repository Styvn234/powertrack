
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        powertrack: {
          bg: '#0A1320',
          surface: '#0F1B2A',
          'surface-elevated': '#131F30',
          border: '#1F2A3D',
          'border-strong': '#2A3A52',
          text: '#E8EEF5',
          'text-secondary': '#B8C3D1',
          muted: '#7A8699',
          'accent-teal': '#2DD4BF',
          'accent-teal-hover': '#14B8A6',
          'accent-amber': '#FBBF24',
          'accent-green': '#34D399',
          'accent-magenta': '#E879F9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
