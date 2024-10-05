import React, {useEffect, useState} from "react";

const Toast = ({
  message = 'message',
  color = 'indigo-500',
  duration = 5000,
  animation,
}) => {
  const [Bar,
    setBar] = useState(true);

  useEffect(() => {
    setBar(false);
  }, [])

  return (
    <div className="h-12 w-60 bg-white rounded-md shadow flex-col overflow-hidden">
      <div className="flex items-center justify-center h-10">
        <h3>{message}</h3>
      </div>
      <div
        className={`bg-${color} h-2 transition-all ease-linear delay-100 duration-[${duration}ms] ${Bar
        ? 'w-full'
        : 'w-0'}  ${animation?"animate-slide-out":"animate-slide-in"}`}></div>

    </div>
  )
}

export default Toast;