import { useState } from "react";

import Header from "./components/Header";
import UserInputForm from "./components/UserInputForm";
import Results from "./components/Results";

const INITIAL_INPUT_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [inputValue, setInputValue] = useState(INITIAL_INPUT_VALUES);

  const inputIsValid = inputValue.duration >= 1;

  function handleInputValueChange(inputName, newValue) {
    setInputValue((prevValues) => {
      return {
        ...prevValues,
        [inputName]: +newValue,
      };
    });
  }

  return (
    <main>
      <Header />
      <UserInputForm
        handleInputValueChange={handleInputValueChange}
        data={INITIAL_INPUT_VALUES}
      />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
      {inputIsValid && <Results input={inputValue} />}
    </main>
  );
}

export default App;
