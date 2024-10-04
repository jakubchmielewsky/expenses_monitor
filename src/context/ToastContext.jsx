import React,{createContext,useState} from "react";

const ToastContext = createContext();

export const ToastProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message,color) => {
        setToasts([...toasts,{id:Date.now(),message,color}]);
    }

    return(
        <ToastContext.Provider value={{toasts, addToast}}>
            {children}
        </ToastContext.Provider>
    )
}