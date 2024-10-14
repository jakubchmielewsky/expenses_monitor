import React, { createContext, useContext, useRef, useState } from "react";

const FormContext = createContext();

export const FormProvider= ({children}) => {
    const expenseFormRef = useRef();
    const [edit, setEdit] = useState(false);
    const [expenseForm, setExpenseForm] = useState({amount: "", category: "", date: "", description: ""});

    return(
        <FormContext.Provider value={{expenseForm, setExpenseForm, expenseFormRef,edit, setEdit}}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => useContext(FormContext);