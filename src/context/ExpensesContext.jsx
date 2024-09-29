import React,{createContext, useReducer} from "react";

const ExpensesContext = createContext();

export const actions = {
    add: {type: 'ADD'},
    delete: {type: 'DELETE'},
    edit: {type: 'EDIT'}
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
    const [expenses, dispatch] = useReducer(expensesReducer, []);

    return(
        <ExpensesContext.Provider value={{expenses, dispatch}}>
            {children}
        </ExpensesContext.Provider>
    )
};

export default ExpensesProvider;