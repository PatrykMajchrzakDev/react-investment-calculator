import React, { useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({
    currentSavings: "",
    yearlySavings: "",
    expectedInterest: "",
    investmentDuration: "",
  });
  const calculateDataHandler = (event) => {
    event.preventDefault();
    // ---- Should be triggered when form is submitted
    // ---- You might not directly want to bind it to the submit event on the form though...

    // const yearlyData = []; // per-year results

    // let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    // const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    // const expectedReturn = +userInput["expected-return"] / 100;
    // const duration = +userInput["duration"];

    // // The below code calculates yearly results (total savings, interest etc)
    // for (let i = 0; i < duration; i++) {
    //   const yearlyInterest = currentSavings * expectedReturn;
    //   currentSavings += yearlyInterest + yearlyContribution;
    //   yearlyData.push({
    //     // feel free to change the shape of the data pushed to the array!
    //     year: i + 1,
    //     yearlyInterest: yearlyInterest,
    //     savingsEndOfYear: currentSavings,
    //     yearlyContribution: yearlyContribution,
    //   });
    // }
    props.onSubmittingInputs(formData);
    // do something with yearlyData ...
  };
  const handleCurrentSavingsValue = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      currentSavings: value,
    }));
  };

  const handleYearlySavings = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      yearlySavings: value,
    }));
  };
  const handleExpectedInterest = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      expectedInterest: value,
    }));
  };
  const handleInvestmentDuration = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      investmentDuration: value,
    }));
  };

  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={handleCurrentSavingsValue}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={handleYearlySavings}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={handleExpectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={handleInvestmentDuration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button" onClick={calculateDataHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
