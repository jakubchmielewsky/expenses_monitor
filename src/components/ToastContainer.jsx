import React from "react";

import Toast from "./Toast"

const ToastContainer = ({autoClose, closeOnClick, pauseOnHover, transition}) => {

    return (
        <div className="absolute top-32 right-10 flex flex-col gap-6">
            <Toast/>
            <Toast/>
            <Toast/>
            <Toast/>
        </div>
    )
}

export default ToastContainer;