import React from "react";

const RadioButton = ({ name, value, checked, onChange, label }) => {
  return (
    <label className=''>
      <input type='radio' name={name} value={value} checked={checked} onChange={onChange} className='hidden' />
      <div className=''>{checked && <div className=''></div>}</div>
      <span className=''>{label}</span>
    </label>
  );
};

export default RadioButton;
