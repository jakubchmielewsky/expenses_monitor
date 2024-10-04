import React from "react";

//context
import ExpensesProvider from "./context/ExpensesContext";

//components
import NavBar from "./components/NavBar";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpensesSummary from "./components/ExpensesSummary";
import ExpensesList from "./components/ExpensesList";

//toasts
import ToastContainer from "./components/ToastContainer";

function App() {
  return (
    <ExpensesProvider>
      <div className="min-h-screen bg-gray-100">
        <ToastContainer/>
        <NavBar/>
        <main className="max-w-7xl mx-auto py-12 px-4 gap-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <AddExpenseForm/>
            <ExpensesSummary/>
          </div>
          <ExpensesList/>
        </main>
      </div>
    </ExpensesProvider>
  );
}

export default App;
