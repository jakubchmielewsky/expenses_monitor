import React from "react";

const InputGroup = ({
  label = "label",
  type,
  value,
  onChange,
  name
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2 shadow w-full block focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>

    </div>
  )
}

export default InputGroup;