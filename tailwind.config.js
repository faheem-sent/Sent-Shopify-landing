/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ground: '#0C0C0C',
        surface: {
          DEFAULT: '#131315',
          2: '#151517',
          3: '#111113',
          4: '#1A1A1D',
        },
        line: {
          DEFAULT: 'rgba(255,255,255,0.09)',
          strong: '#26262A',
        },
        ink: {
          DEFAULT: '#F5F3F4',
          muted: '#A9A7AF',
          dim: '#8A8792',
          faint: '#77747F',
          fainter: '#6E6B76',
          body: '#9C99A6',
        },
        accent: {
          DEFAULT: '#B7B5DB',
          deep: '#8C86BB',
          pale: '#F2F0FA',
          wash: 'rgba(140,134,187,0.16)',
          'wash-strong': 'rgba(140,134,187,0.20)',
        },
        neutral: {
          dot: '#3A3A3F',
          pill: '#1E1E21',
          off: '#4A474F',
          title: '#DCDAE0',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '12px',
        field: '9px',
        pill: '999px',
      },
      boxShadow: {
        frame: '0 30px 80px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'panel-wash': 'linear-gradient(180deg, rgba(140,134,187,0.08), rgba(140,134,187,0.02))',
        'cta-wash': 'radial-gradient(900px 300px at 50% 0%, rgba(140,134,187,0.10), transparent)',
      },
      maxWidth: {
        // 1312px of content (§8.2 — 600 + 72 + 640) plus the 24px gutters.
        shell: '1360px',
      },
      transitionDuration: {
        160: '160ms',
        200: '200ms',
        220: '220ms',
      },
    },
  },
  plugins: [],
};
