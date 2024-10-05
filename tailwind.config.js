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
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  extend: {
    keyframes: {
      'slide-in-right': {
        '0%': {
          transform: 'translateX(100%)',
          opacity: 0,
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: 1,
        },
      },
      'slide-out-right': {
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
      'slide-in-right': 'slide-in-right 0.5s ease-out',
      'slide-out-right': 'slide-out-right 0.5s ease-out',
    },
  },
}

