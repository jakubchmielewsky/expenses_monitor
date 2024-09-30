import { useContext } from "react";

import { AddExpenseFormContext } from "../context/AddExpenseFormContext";

export const useAddExpenseForm = () => {
    const context = useContext(AddExpenseFormContext);
    if(!context){
        throw new Error("useAddExpenseForm must be used inside an AddExpenseProvider");
    }
    return context;
}