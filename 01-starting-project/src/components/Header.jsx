import investmentCalculatorImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investmentCalculatorImg} alt="Logo Investment Calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
