import React,{useEffect,useState} from "react";

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
import { AuthenticationProvider } from "./context/AuthenticationContext";

//firebase
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "./firebaseConfig";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          email: currentUser.email,
          id: currentUser.uid
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthenticationProvider>
      <ExpensesProvider user={user}>
        <ToastProvider>
          <FormProvider>
              <div className="min-h-screen bg-gray-100">
                {!user?<AuthenticationForm/> : null}
                  <ToastContainer duration={2000}/>
                <NavBar user={user} handleLogout={handleLogout}/>
                <main className="max-w-7xl mx-auto py-12 px-4 gap-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <AddExpenseForm/>
                    <ExpensesSummary/>
                  </div>
                  <ExpensesList/>
                </main>
              </div>
          </FormProvider>
        </ToastProvider>
      </ExpensesProvider>
    </AuthenticationProvider>
  );
}

export default App;
