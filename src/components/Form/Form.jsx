import React, { useState, useRef } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  //Object to store values data
  const [formData, setFormData] = useState({
    currentSavings: "",
    yearlySavings: "",
    expectedInterest: "",
    investmentDuration: "",
  });

  //Refs to inputs
  const currentSavingsRef = useRef();
  const yearlySavingsRef = useRef();
  const expectedInterestRef = useRef();
  const investmentDurationRef = useRef();

  //Push back formData values to parent element - App.js
  const calculateDataHandler = (event) => {
    event.preventDefault();
    props.onSubmittingInputs(formData);
  };

  //Save current savings value
  const handleCurrentSavingsValue = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      currentSavings: +value,
    }));
  };

  //Sav yearly savings valuevalue
  const handleYearlySavings = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      yearlySavings: +value,
    }));
  };

  //Save expected interest value
  const handleExpectedInterest = (event) => {
    const value = event.target.value / 100;
    setFormData((prevFormData) => ({
      ...prevFormData,
      expectedInterest: +value,
    }));
  };

  //Save investment duration value
  const handleInvestmentDuration = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      investmentDuration: +value,
    }));
  };

  //Reset form values and object values
  const resetValuesHandler = () => {
    props.onResetTable();
    setFormData({
      currentSavings: "",
      yearlySavings: "",
      expectedInterest: "",
      investmentDuration: "",
    });
    currentSavingsRef.current.value = "";
    yearlySavingsRef.current.value = "";
    expectedInterestRef.current.value = "";
    investmentDurationRef.current.value = "";
  };

  return (
    <form onSubmit={calculateDataHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            ref={currentSavingsRef}
            onChange={handleCurrentSavingsValue}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            ref={yearlySavingsRef}
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
            ref={expectedInterestRef}
            onChange={handleExpectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            ref={investmentDurationRef}
            onChange={handleInvestmentDuration}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="button"
          className={classes.buttonAlt}
          onClick={resetValuesHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
