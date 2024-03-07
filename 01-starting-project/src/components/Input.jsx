import { useState } from "react";

export default function Input({ labelText }) {
  const [inputValue, setInputValue] = useState(0);

  function handleValueChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <label>{labelText}</label>
      <input
        type="number"
        value={inputValue}
        onChange={handleValueChange}
      ></input>
    </div>
  );
}
