import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/Form";

function App() {
  const handleArrayOfInputValues = (arr) => {
    console.log(arr);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < arr.investmentDuration; i++) {
      const yearlyInterest = arr.currentSavings * arr.yearlySavings;
      arr.currentSavings += yearlyInterest + arr.yearlySavings;

      const result = [];
      result.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: arr.currentSavings,
        yearlyContribution: arr.yearlySavings,
      });
      console.log(result);
    }
  };
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
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
