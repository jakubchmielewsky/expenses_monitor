import React, {useEffect, useState} from "react";

const Toast = ({
  message = 'message',
  color = 'red-500',
  animationSwitch,
  duration
}) => {
  const [barSwitch,
    setBarSwitch] = useState(true);

  useEffect(() => {
    setBarSwitch(false);
  }, [])


  return (
    <div
      className={`right-10 h-12 w-60 bg-white rounded-md shadow-custom flex-col overflow-hidden ${animationSwitch
      ? "animate-slide-out"
      : "animate-slide-in"} transform transition-transform duration-500 ease-in-out`}>
      <div className="flex items-center justify-center h-10">
        <h3>{message}</h3>
      </div>
      <div
        className={`bg-${color} h-2 transition-all ease-linear delay-500 ${barSwitch
            ? 'w-full'
            : 'w-0'}`}
        style={{
            transitionDuration: `${duration}ms`,
        }}
        ></div>

    </div>
  )
}

export default Toast;