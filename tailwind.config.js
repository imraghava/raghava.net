/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces — near-black with a cool cast.
        // Do not name a color `base`/`sm`/`lg` etc — those collide with
        // Tailwind's text-<size> utilities and silently hijack text color.
        void: "#07070B",
        surface: "#101018",
        elevated: "#16161F",

        // Accents
        iris: {
          DEFAULT: "#7C5CFF",
          soft: "#A492FF",
          deep: "#5B3DF5",
        },
        aqua: {
          DEFAULT: "#22D3EE",
          soft: "#67E8F9",
        },
        blush: "#F472B6",

        // Text
        ink: "#ECECF3",
        muted: "#9B9BAC",
        faint: "#6C6C7E",
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      keyframes: {
        'aurora-drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(6%,-8%,0) scale(1.15)' },
          '66%': { transform: 'translate3d(-7%,5%,0) scale(0.92)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'role-in': {
          '0%': { opacity: '0', transform: 'translateY(14px) rotateX(-40deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotateX(0)' },
        },
        'caret': {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' },
        },
        'scroll-hint': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '35%': { opacity: '1' },
          '100%': { transform: 'translateY(14px)', opacity: '0' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.7' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        'aurora-drift': 'aurora-drift 22s ease-in-out infinite',
        'aurora-drift-slow': 'aurora-drift 34s ease-in-out infinite reverse',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
        'role-in': 'role-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
        'caret': 'caret 1.1s step-end infinite',
        'scroll-hint': 'scroll-hint 1.9s ease-in-out infinite',
        'marquee': 'marquee 42s linear infinite',
        'pulse-ring': 'pulse-ring 2.6s cubic-bezier(0.22, 1, 0.36, 1) infinite',
      },
    },
  },
  plugins: [],
}
