import React, { useEffect, useState } from "react";
import Toast from "./Toast";
import { useToasts } from "../context/ToastContext";

const ToastContainer = ({ duration = 3000 }) => {
  const { toasts, removeToast } = useToasts();
  const [closing, setClosing] = useState({});

  useEffect(() => {
    const activeToasts = toasts.filter((toast) => !closing[toast.id]);//only toasts without timers
    activeToasts.forEach((toast) => {
      const timerId = setTimeout(() => {
        setClosing((prevClosing) => ({
          ...prevClosing,
          [toast.id]: true,
        }));
        setTimeout(() => {
          removeToast(toast.id);
        }, 500); // slide-out animation duration
      }, duration + 500);// duration + slide-in

      return () => clearTimeout(timerId);
    });
  }, [toasts, removeToast, closing, duration]);


  return (
    <div className="fixed flex flex-col w-full left-0 right-0 top-0 md:left-auto md:w-60 md:top-32 md:right-10 md:gap-6">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          animationSwitch={closing[toast.id]}
          duration={duration}
          color={toast.color}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
