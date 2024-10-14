import React,{createContext, useReducer, useContext, useEffect} from "react";
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc,query,where, count } from "firebase/firestore";
import { db } from "../firebaseConfig";

 const ExpensesContext = createContext();

const expensesReducer = (expenses, action) => {
    switch (action.type){
        case 'SET':
            return action.payload;
        case 'ADD':
            return [...expenses,action.payload];
        case 'DELETE':
            return expenses.filter((expense)=>expense.id!==action.payload);
        case 'EDIT':
            return expenses.map((expense)=>expense.id===action.payload.id?action.payload : expense);
        default:
            return expenses;
    }
};

export const ExpensesProvider = ({children, user}) => {
    const [expenses, dispatch] = useReducer(expensesReducer, [
        /*{ id: 1, amount: 50, category: "Food", date: "2023-05-01", description: "Groceries" },
        { id: 2, amount: 30, category: "Transport", date: "2023-05-02", description: "Bus fare" },
        { id: 3, amount: 100, category: "Entertainment", date: "2023-05-03", description: "Movie night" },*/
      ]);

    useEffect(() => {
        if (!user) return;
        const fetchExpenses = async () => {
            const q = query(collection(db, "expenses"), where("uid", "==", user.id));
            const querySnapshot = await getDocs(q);
            const expensesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            console.log(expensesData);
            dispatch({ type: "SET", payload: expensesData });
        };
        fetchExpenses();
      }, [user]);

      const addExpense = async (expense) => {
        const docRef = await addDoc(collection(db, "expenses"), expense);
        dispatch({ type: "ADD", payload: { id: docRef.id, uid:user.id, ...expense} });
      };
    
      const deleteExpense = async (id) => {
        await deleteDoc(doc(db, "expenses", id));
        dispatch({ type: "DELETE", payload: id });
      };
    
      const editExpense = async (updatedExpense) => {
        await updateDoc(doc(db, "expenses", updatedExpense.id), updatedExpense);
        dispatch({ type: "EDIT", payload: updatedExpense });
      };
    
    return(
        <ExpensesContext.Provider value={{expenses,addExpense,deleteExpense,editExpense}}>
            {children}
        </ExpensesContext.Provider>
    )
};

export const useExpenses = () => useContext(ExpensesContext);