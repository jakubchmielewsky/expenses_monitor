import React from "react";

const InputGroup = ({
  label = "label",
  type,
  value,
  onChange,
  name,
  className,
  required
}) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2 shadow w-full block border-gray-300 rounded-md pl-3 py-0.5"
        required={required}/>

    </div>
  )
}

export default InputGroup;