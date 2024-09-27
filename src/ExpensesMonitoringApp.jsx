import React from "react";

//components 
import NavBar from "./components/NavBar";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpensesSummary from "./components/ExpensesSummary";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar/>
      <main className="max-w-7xl mx-auto py-6">
        <div className="px-4 py-6">
          <div className="grid grid-cols-1 gap-6">
            <AddExpenseForm/>
            <ExpensesSummary/>
          </div>
          {/* <ExpenseList/> */}
        </div>
      </main>
    </div>
  );
}

export default App;
