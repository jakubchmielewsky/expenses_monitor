import React,{createContext, useState} from "react";

export const AddExpenseFormContext = createContext();

const AddExpenseProvider = ({children}) => {
    const [expense, setExpense] = useState({id: "", amount: "", category: "", date: "", description: ""});
    return(
        <AddExpenseFormContext.Provider value={{expense, setExpense}}>
            {children}
        </AddExpenseFormContext.Provider>
    )
};

export default AddExpenseProvider;