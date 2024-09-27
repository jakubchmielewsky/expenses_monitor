import React from "react";

const InputGroup = ({
  label = "label",
  type,
  value,
  onChange
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 shadow w-full block focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>

    </div>
  )
}

export default InputGroup;