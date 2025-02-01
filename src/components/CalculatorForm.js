import React, { useState } from "react";
import InputField from "./InputField";
import PlanSelector from "./PlanSelector";
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
              <label> Number of Users:
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

            <PlanSelector plans={["plan_1", "plan_2", "plan_3"]} selectedPlan={plan} onChange={handlePlanChange} />

            <div className='costs'>
              {[
                { id: "telecom_cost", label: "Telecom - Local and Long Distance" },
                { id: "service_cost", label: "Service or Parts Charges" },
                { id: "support_cost", label: "Support and Software Upgrades" },
              ].map(({ id, label }) => (
                <InputField key={id} id={id} label={label} value={id === "telecom_cost" ? telecomCost : id === "service_cost" ? serviceCost : supportCost} onChange={handleCostChange(id === "telecom_cost" ? setTelecomCost : id === "service_cost" ? setServiceCost : setSupportCost)} placeholder='0' />
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CalculatorForm;
