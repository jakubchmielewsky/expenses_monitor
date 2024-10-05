import React, {useEffect, useState} from "react";

import Toast from "./Toast"

import {useToasts} from "../context/ToastContext";

const ToastContainer = ({autoClose, closeOnClick, pauseOnHover, transition}) => {
  const {toasts, addToast, removeToast} = useToasts();
  const [closing,
    setClosing] = useState({});

  useEffect(() => {
    const timers = toasts.map((toast) => setTimeout(() => {
      setClosing((prevClosing) => ({
        ...prevClosing,
        [toast.id]: true
      }));
      setTimeout(() => {
        removeToast(toast.id);
      }, 500) //duration of slide in/slide out animation
    }, 6000));

    timers.forEach((timer) => clearTimeout(timer));

  }, [toasts, removeToast]);


  return (
    <div className="absolute top-32 right-10 flex flex-col gap-6">
      {toasts.map((toast) => {
        return (<Toast message="Dodano!" animation={closing[toast.id]}/>)
      })}

    </div>
  )
}

export default ToastContainer;