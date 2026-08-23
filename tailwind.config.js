/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef2f6',
          100: '#d5e0eb',
          200: '#abbfd7',
          300: '#7d9dbe',
          400: '#3e6f9f',
          500: '#1f5a7f',
          600: '#164a6f',
          700: '#123D58',
          800: '#0d2d45',
          900: '#091d34',
          950: '#061324',
          DEFAULT: '#123D58',
        },
        gold: {
          50:  '#fdf8f3',
          100: '#f9ede2',
          200: '#f1d6c0',
          300: '#e6bd9e',
          400: '#d4a884',
          500: '#c8906A',
          600: '#b07a58',
          700: '#8f6147',
          800: '#6e4a38',
          900: '#523826',
          DEFAULT: '#c8906A',
          light: '#D4B898',
        },
        cream: {
          50:  '#ffffff',
          100: '#fdfcfa',
          200: '#faf8f5',
          300: '#f5f1eb',
          400: '#ece5db',
          DEFAULT: '#FAF8F5',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        label: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      boxShadow: {
        luxe:    '0 24px 48px -12px rgba(18, 61, 88, 0.18)',
        'luxe-dark': '0 24px 48px -12px rgba(6, 19, 36, 0.5)',
        gold:    '0 8px 24px -6px rgba(200, 144, 106, 0.35)',
        'gold-hover': '0 12px 32px -6px rgba(200, 144, 106, 0.45)',
        'inner-luxe': 'inset 0 2px 8px rgba(18, 61, 88, 0.06)',
        'card-raise': '0 1px 3px rgba(18,61,88,0.04), 0 8px 24px -8px rgba(18,61,88,0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'slide-in-right': 'slideInRight 0.6s ease forwards',
        'shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c8906A 0%, #D4B898 50%, #e6bd9e 100%)',
        'navy-gradient': 'linear-gradient(135deg, #061324 0%, #091d34 50%, #123D58 100%)',
      },
    },
  },
  plugins: [],
};
