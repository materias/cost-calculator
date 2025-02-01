import React, { useState } from "react";
import RadioButton from "./RadioButton";

function CalculatorForm({ onUpdateParams }) {
  const [currency, setCurrency] = useState("USD");
  const [numberOfUsers, setNumberOfUsers] = useState(1);
  const [plan, setPlan] = useState("plan_2");
  const [telecomCost, setTelecomCost] = useState(0);
  const [serviceCost, setServiceCost] = useState(0);
  const [supportCost, setSupportCost] = useState(0);

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setCurrency(newCurrency);
    onUpdateParams({ currency: newCurrency });
  };

  const handleUserChange = (e) => {
    const newNumberOfUsers = parseInt(e.target.value, 10);
    setNumberOfUsers(newNumberOfUsers);
    onUpdateParams({ numberOfUsers: newNumberOfUsers });
  };

  const handlePlanChange = (e) => {
    setPlan(e.target.id);
    onUpdateParams({ plan: e.target.id });
  };

  const handleCostChange = (setter) => (e) => {
    const value = e.target.value ? parseFloat(e.target.value) : 0;
    setter(value);
    onUpdateParams({ [e.target.id]: value });
  };

  return (
    <div className='calculator-form'>
      <form>
        <div className='currency-selection'>
          <h3>Choose Currency: </h3>
          {["USD", "EUR", "GBP"].map((cur) => (
            <RadioButton key={cur} name='currency' value={cur} checked={currency === cur} onChange={handleCurrencyChange} label={`${cur} ${cur === "USD" ? "($)" : cur === "EUR" ? "(€)" : "(£)"}`} />
          ))}
        </div>

        <div className='container'>
          <div className='grid-block'>
            <div className='block-users'>
              <label>
                Number of Users:
                <input type='number' value={numberOfUsers} min='1' onChange={handleUserChange} />
              </label>
            </div>

            <h2>Existing business phone system & service</h2>
            <div className='shadow-box monthly-costs'>
              <p>Average Business Communications Costs</p>
            </div>

            <div className='brand-logo'>
              <img loading='lazy' src='images/brand-logo.svg' alt='Brand Logo' width='341' height='92' />
            </div>

            <div className='shadow-box brand'>
              <p>CHOOSE YOUR BRAND PLAN</p>
              <div className='brand-plan'>
                {["plan_1", "plan_2", "plan_3"].map((planType) => (
                  <div key={planType}>
                    <input type='radio' name='choose-plan' id={planType} checked={plan === planType} onChange={handlePlanChange} />
                    <label htmlFor={planType}>
                      {planType.charAt(0).toUpperCase() + planType.slice(1)}
                      <span className='input-prices'>
                        <input type='text' placeholder='0' className='input-price' disabled={planType !== plan} />
                        <span className='currency'>$</span>
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className='costs'>
              {[
                {
                  id: "telecom_cost",
                  label: "Telecom - Local and Long Distance",
                },
                { id: "service_cost", label: "Service or Parts Charges" },
                { id: "support_cost", label: "Support and Software Upgrades" },
              ].map(({ id, label }) => (
                <div className='existing-costs row' key={id}>
                  <p>{label}</p>
                  <input type='text' id={id} value={id === "telecom_cost" ? telecomCost : id === "service_cost" ? serviceCost : supportCost} onChange={handleCostChange(id === "telecom_cost" ? setTelecomCost : id === "service_cost" ? setServiceCost : setSupportCost)} placeholder='0' min='0' max='100' maxLength='5' />
                  <span className='currency'>$</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CalculatorForm;
