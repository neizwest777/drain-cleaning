// @shared
import { jsx } from "@app/html-jsx"

// Global styles component - returns style tag with all global CSS
export function GlobalStyles() {
  return (
    <style type="text/tailwindcss">{`
      @layer base {
        body {
          @apply bg-gray-50 text-gray-900 antialiased;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          @apply font-bold leading-tight;
        }
        
        h1 {
          @apply text-4xl md:text-5xl lg:text-6xl;
        }
        
        h2 {
          @apply text-3xl md:text-4xl lg:text-5xl;
        }
        
        h3 {
          @apply text-2xl md:text-3xl;
        }
        
        a {
          @apply transition-colors duration-200;
        }
        
        button {
          @apply transition-all duration-200;
        }
      }
      
      @layer utilities {
        .text-balance {
          text-wrap: balance;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        .scale-in {
          animation: scaleIn 0.5s ease-out forwards;
          opacity: 0;
          transform: scale(0.95);
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .hover-lift {
          @apply transition-transform duration-200;
        }
        
        .hover-lift:hover {
          @apply -translate-y-1;
        }
        
        .btn-primary {
          @apply bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl;
        }
        
        .btn-secondary {
          @apply bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg border-2 border-blue-600;
        }
        
        .card {
          @apply bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6;
        }
        
        .section {
          @apply py-16 md:py-24;
        }
        
        .container-custom {
          @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
        }
        
        .gradient-primary {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
        }
        
        .gradient-secondary {
          background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
        }
        
        .text-gradient {
          @apply bg-clip-text text-transparent;
          background-image: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
        }
        
        .input-field {
          @apply w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none;
        }
        
        .input-field:focus {
          @apply shadow-md;
        }
        
        .sticky-button {
          @apply fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 active:scale-95 transition-all duration-200;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      }
    `}</style>
  )
}

// Tailwind config
export function TailwindConfig() {
  return (
    <script>{`
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: '#2563eb',
              secondary: '#1e40af',
              accent: '#3b82f6',
              success: '#10b981',
              danger: '#ef4444',
              warning: '#f59e0b',
              info: '#3b82f6',
            },
            fontFamily: {
              sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
          }
        }
      }
    `}</script>
  )
}
