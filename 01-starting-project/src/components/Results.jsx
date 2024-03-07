import { calculateInvestmentResults, formatter } from "../util/investment";

const tableHeaders = {
  1: "Year",
  2: "Investment Value",
  3: "Interest (Year)",
  4: "Total Interest",
  5: "Invested Capital",
};

function getTableHeaders(tableHeaders) {
  return Object.keys(tableHeaders).map((key) => (
    <th key={key}>{tableHeaders[key]}</th>
  ));
}

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  console.log(resultData);

  return (
    <table id="result">
      <thead>
        <tr>{getTableHeaders(tableHeaders)}</tr>
      </thead>
      <tbody>
        {resultData &&
          resultData.map((row) => {
            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment * row.year -
              initialInvestment;
            const totalAmountInvested = row.valueEndOfYear - totalInterest;

            return (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
