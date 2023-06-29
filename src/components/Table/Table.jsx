import React from "react";

const TableRow = (props) => {
  const initialInvestment = props.initialInvestment;
  // console.log(props.dataArray);
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.dataArray.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>
              {(
                yearData.savingsEndOfYear -
                initialInvestment -
                yearData.yearlyContribution * yearData.year
              ).toFixed(0)}
            </td>
            <td>
              {(
                initialInvestment +
                yearData.yearlyContribution * yearData.year
              ).toFixed(0)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableRow;

// {calculatedData.map((item) => (
//   <TableRow
//     key={Math.random()}
//     year={item[0].year}
//     yearlyInterest={item[0].yearlyInterest}
//     savingsEndOfYear={item[0].savingsEndOfYear}
//     yearlyContribution={item[0].yearlyContribution}
//   />
// ))}
