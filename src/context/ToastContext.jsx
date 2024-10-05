import React,{createContext,useContext,useState} from "react";

const ToastContext = createContext();

export const ToastProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message,color) => {
        setToasts([...toasts,{id:Date.now(),message,color}]);
    }

    const removeToast = (id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
      }

    return(
        <ToastContext.Provider value={{toasts, addToast, removeToast}}>
            {children}
        </ToastContext.Provider>
    )
}
export const useToasts = () => useContext(ToastContext);