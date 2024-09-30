import { useContext } from "react";
import { ExpensesContext } from "../context/ExpensesContext";

export const useExpenses = () => {
    const context = useContext(ExpensesContext);
    if(!context){
        throw new Error("useExpenses must be used inside an ExpensesProvider");
    }
    return context;
}