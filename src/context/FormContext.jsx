import React, { createContext, useContext, useRef, useState } from "react";

const FormContext = createContext();

export const FormProvider= ({children}) => {
    const expenseFormRef = useRef();
    const [expenseForm, setExpenseForm] = useState({id: "", amount: "", category: "", date: "", description: ""});

    return(
        <FormContext.Provider value={{expenseForm, setExpenseForm, expenseFormRef}}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => useContext(FormContext);