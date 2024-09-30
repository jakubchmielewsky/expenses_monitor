import React from "react";

//context
import ExpensesProvider from "./context/ExpensesContext";
import AddExpenseProvider from "./context/AddExpenseFormContext";

//components
import NavBar from "./components/NavBar";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpensesSummary from "./components/ExpensesSummary";
import ExpensesList from "./components/ExpensesList";

function App() {
  return (
    <ExpensesProvider>
      <div className="min-h-screen bg-gray-100">
        <NavBar/>
        <main className="max-w-7xl mx-auto py-12 px-4 gap-6">
          <div className="grid grid-cols-1 gap-6">
            <AddExpenseProvider>
              <AddExpenseForm/>
            </AddExpenseProvider>
            <ExpensesSummary/>
          </div>
          <AddExpenseProvider>
            <ExpensesList/>
          </AddExpenseProvider>
        </main>
      </div>
    </ExpensesProvider>
  );
}

export default App;
