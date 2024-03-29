import Input from "./Input";

export default function UserInput({ handleInputValueChange, data }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          labelText="initial investment"
          inputName={Object.keys(data)[0]}
          inputVal={data.initialInvestment}
          onInputValueChange={handleInputValueChange}
        />
        <Input
          labelText="annual investment"
          inputName={Object.keys(data)[1]}
          inputVal={data.annualInvestment}
          onInputValueChange={handleInputValueChange}
        />
      </div>
      <div className="input-group">
        <Input
          labelText="expected return"
          inputName={Object.keys(data)[2]}
          inputVal={data.expectedReturn}
          onInputValueChange={handleInputValueChange}
        />
        <Input
          labelText="duration"
          inputName={Object.keys(data)[3]}
          inputVal={data.duration}
          onInputValueChange={handleInputValueChange}
        />
      </div>
    </section>
  );
}
