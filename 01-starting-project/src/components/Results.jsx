const tableHeaders = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

const tableData = [
  {
    year: 2000,
    investmentValue: 200,
    interestYear: 100,
    totalInterest: 4000,
    investedCapital: 3000,
  },
  {
    year: 2001,
    investmentValue: 200,
    interestYear: 100,
    totalInterest: 4000,
    investedCapital: 3000,
  },
  {
    year: 2002,
    investmentValue: 200,
    interestYear: 100,
    totalInterest: 4000,
    investedCapital: 3000,
  },
  {
    year: 2003,
    investmentValue: 200,
    interestYear: 100,
    totalInterest: 4000,
    investedCapital: 3000,
  },
  {
    year: 2004,
    investmentValue: 200,
    interestYear: 100,
    totalInterest: 4000,
    investedCapital: 3000,
  },
  {
    year: 2005,
    investmentValue: 200,
    interestYear: 100,
    totalInterest: 4000,
    investedCapital: 3000,
  },
];

function getTableHeaders(tableHeaders) {
  return tableHeaders.map((header) => <th>{header}</th>);
}

export default function Results() {
  return (
    <table id="result">
      <thead>
        <tr>{getTableHeaders(tableHeaders)}</tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((row) => {
            return (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{row.investmentValue}</td>
                <td>{row.interestYear}</td>
                <td>{row.totalInterest}</td>
                <td>{row.investedCapital}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
