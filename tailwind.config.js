/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/ExpensesMonitoringApp.jsx",
    "./src/components/NavBar.jsx",
    "./src/components/AddExpenseForm.jsx",
    "./src/components/ExpensesSummary.jsx",
    "./src/components/InputGroup.jsx",
    "./src/components/ExpensesList.jsx",
    "./src/components/ExpenseListItem.jsx",
    "./src/components/Toast.jsx",
    "./src/components/ToastContainer.jsx",
    "./src/components/AuthenticationForm.jsx",
  ],
  safelist: [
    'w-full',  
    'w-0',     
    'animate-slide-in',  
    'animate-slide-out',
    'bg-indigo-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-emerald-500'

  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'slide-out': {
          '0%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
          '100%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-in',
        'slide-out': 'slide-out 0.5s ease-out',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],

  
}

