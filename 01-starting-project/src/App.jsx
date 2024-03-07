import { useState } from "react";

import Header from "./components/Header";
import UserInputForm from "./components/UserInputForm";

const INITIAL_INPUT_VALUES = {
  initialInvestment: 0,
  annualInvestment: 3,
  expectedReturn: 8,
  duration: 0,
};

function App() {
  const [inputValue, setInputValue] = useState(INITIAL_INPUT_VALUES);

  function handleInputValueChange(inputName, newValue) {
    setInputValue((prevValues) => {
      return {
        ...prevValues,
        [inputName]: newValue,
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
    </main>
  );
}

export default App;
