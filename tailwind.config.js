module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // blue-600
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
        },
        secondary: {
          DEFAULT: "#64748B", // slate-500
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
        },
        accent: {
          DEFAULT: "#3B82F6", // blue-500
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
        },
        background: {
          DEFAULT: "#0F172A", // slate-900
          800: "#1E293B", // slate-800
          900: "#0F172A", // slate-900
        },
        surface: {
          DEFAULT: "#1E293B", // slate-800
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
        },
        text: {
          primary: "#F8FAFC", // slate-50
          secondary: "#94A3B8", // slate-400
          50: "#F8FAFC", // slate-50
          400: "#94A3B8", // slate-400
        },
        success: {
          DEFAULT: "#10B981", // emerald-500
          400: "#34D399", // emerald-400
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
        border: {
          DEFAULT: "#334155", // slate-700
          600: "#475569", // slate-600
          700: "#334155", // slate-700
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '6px',
        'lg': '8px',
      },
      boxShadow: {
        'elevation-1': '0 2px 4px rgba(0, 0, 0, 0.25)',
        'elevation-2': '0 8px 16px rgba(0, 0, 0, 0.25)',
        'elevation-3': '0 16px 32px rgba(0, 0, 0, 0.25)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'pulse-security': 'pulse-security 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}