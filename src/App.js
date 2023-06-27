import React, { useState, useEffect } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/Form";
import TableRow from "./components/TableRow";

function App() {
  const [calculatedData, setCalculatedData] = useState([]);
  const handleArrayOfInputValues = (arr) => {
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < arr.investmentDuration; i++) {
      const yearlyInterest = arr.currentSavings * arr.expectedInterest;
      arr.currentSavings += yearlyInterest + arr.yearlySavings;

      //dodac total interest i invested capital

      const result = [];
      result.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: arr.currentSavings,
        yearlyContribution: arr.yearlySavings,
      });
      setCalculatedData((prevData) => [...prevData, result]);
    }
  };
  useEffect(() => {
    console.log(calculatedData);
  }, [calculatedData]);
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form onSubmittingInputs={handleArrayOfInputValues} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

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
          {calculatedData.map((item) => (
            <TableRow
              key={Math.random()}
              year={item.year}
              yearlyInterest={item.yearlyInterest}
              savingsEndOfYear={item.savingsEndOfYear}
              yearlyContribution={item.yearlyContribution}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
