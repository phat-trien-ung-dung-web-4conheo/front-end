import React from "react";

const Input = ({ name, label = "", placeholder = "" }) => {
  return (
    <label htmlFor={name} className="flex flex-col gap-1 mb-4 w-full">
      <h3>{label}</h3>
      <input
        className="p-3 rounded-lg w-full text-black"
        type="text"
        id={name}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
