import { useState } from "react";

export default function Input({
  labelText,
  onInputValueChange,
  inputName,
  inputVal,
}) {
  const [inputValue, setInputValue] = useState(inputVal);

  function handleValueChange(event) {
    setInputValue(event.target.value);
    onInputValueChange(inputName, event.target.value);
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
