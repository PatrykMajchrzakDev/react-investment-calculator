import React from "react";

const TableRow = ({
  year,
  yearlyInterest,
  savingsEndOfYear,
  yearlyContribution,
}) => {
  return (
    <tr>
      <td>{year}</td>
      <td>{savingsEndOfYear}</td>
      <td>{yearlyInterest}</td>
      <td>TOTAL INTEREST GAINED</td>
      <td>TOTAL INVESTED CAPITAL</td>
    </tr>
  );
};

export default TableRow;
