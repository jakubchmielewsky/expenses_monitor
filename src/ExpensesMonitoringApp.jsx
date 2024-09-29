import React from "react";

//components 
import NavBar from "./components/NavBar";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpensesSummary from "./components/ExpensesSummary";
import ExpensesList from "./components/ExpensesList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar/>
      <main className="max-w-7xl mx-auto py-12 px-4 gap-6">
          <div className="grid grid-cols-1 gap-6">
            <AddExpenseForm/>
            <ExpensesSummary/>
          </div>
          <ExpensesList/>
      </main>
    </div>
  );
}

export default App;
