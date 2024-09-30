import React,{createContext, useReducer,useState} from "react";

export const ExpensesContext = createContext();

const expensesActions = {
    add: 'ADD',
    delete: 'DELETE',
    edit: 'EDIT'
};

const expensesReducer = (expenses, action) => {
    switch (action.type){
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

const ExpensesProvider = ({children}) => {
    const [expenses, dispatch] = useReducer(expensesReducer, [
        { id: 1, amount: 50, category: "Food", date: "2023-05-01", description: "Groceries" },
    { id: 2, amount: 30, category: "Transport", date: "2023-05-02", description: "Bus fare" },
    { id: 3, amount: 100, category: "Entertainment", date: "2023-05-03", description: "Movie night" },
    ]);

    const [expenseForm, setExpenseForm] = useState({id: "", amount: "", category: "", date: "", description: ""});

    return(
        <ExpensesContext.Provider value={{expenses, dispatch, expensesActions, expenseForm, setExpenseForm}}>
            {children}
        </ExpensesContext.Provider>
    )
};

export default ExpensesProvider;