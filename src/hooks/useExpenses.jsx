import { useContext } from "react";
import { ExpensesContext } from "../context/ExpensesContext";

export const useExpenses = () => {
    const context = useContext(ExpensesContext);
    if(!context){
        throw new Error("useExpense must be used inside an ExpenseProvider");
    }
    return context;
}