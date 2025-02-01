import React from "react";

const InputField = ({ label, id, value, onChange, placeholder }) => {
  return (
    <div className=''>
      <label htmlFor={id} className=''>
        {label}
      </label>
      <input type='text' id={id} value={value} onChange={onChange} placeholder={placeholder} className='' />
    </div>
  );
};

export default InputField;
