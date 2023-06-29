import React, { useState } from "react";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import Header from "./components/Header/Header";
function App() {
  const [calculatedData, setCalculatedData] = useState(null);
  const [initialInvestment, setinitialInvestment] = useState(null);
  const handleArrayOfInputValues = (arr) => {
    setCalculatedData([]);
    setinitialInvestment(arr.currentSavings);
    // The below code calculates yearly results (total savings, interest etc)
    const result = [];
    for (let i = 0; i < arr.investmentDuration; i++) {
      const yearlyInterest = arr.currentSavings * arr.expectedInterest;
      arr.currentSavings += yearlyInterest + arr.yearlySavings;

      //dodac total interest i invested capital

      result.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(0),
        savingsEndOfYear: arr.currentSavings.toFixed(0),
        yearlyContribution: arr.yearlySavings.toFixed(0),
      });
      setCalculatedData(result);
    }
  };
  const onResetTable = () => {
    setCalculatedData(null);
  };
  // useEffect(() => {
  //   console.log(calculatedData);
  // }, [calculatedData]);
  return (
    <div>
      <Header />

      <Form
        onResetTable={onResetTable}
        onSubmittingInputs={handleArrayOfInputValues}
      />

      {!calculatedData && (
        <p className="center">No investment calculated yet.</p>
      )}
      {calculatedData && (
        <Table
          dataArray={calculatedData}
          initialInvestment={initialInvestment}
        />
      )}
    </div>
  );
}

export default App;
