import React from "react";

//components
import NavBar from "./components/NavBar";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpensesSummary from "./components/ExpensesSummary";
import ExpensesList from "./components/ExpensesList";
import AuthenticationForm from "./components/AuthenticationForm";
import ToastContainer from "./components/ToastContainer";

//context
import {ToastProvider} from "./context/ToastContext";
import { FormProvider } from "./context/FormContext";
import { ExpensesProvider } from "./context/ExpensesContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <ExpensesProvider>
      <ToastProvider>
        <FormProvider>
          <UserProvider>
            <div className="min-h-screen bg-gray-100">
              <AuthenticationForm/>
              <ToastContainer duration={2000}/>
              <NavBar/>
              <main className="max-w-7xl mx-auto py-12 px-4 gap-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <AddExpenseForm/>
                  <ExpensesSummary/>
                </div>
                <ExpensesList/>
              </main>
            </div>
          </UserProvider>
        </FormProvider>
      </ToastProvider>
    </ExpensesProvider>
  );
}

export default App;
