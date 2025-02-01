import React from "react";

const PlanSelector = ({ plans, selectedPlan, onChange }) => {
  return (
    <div className='shadow-box brand'>
      <p>CHOOSE YOUR BRAND PLAN</p>
      <div className='brand-plan'>
        {plans.map((planType) => (
          <div key={planType}>
            <input type='radio' name='choose-plan' id={planType} checked={selectedPlan === planType} onChange={onChange} className='hidden' />
            <label htmlFor={planType} className='flex items-center space-x-2 cursor-pointer'>
              <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${selectedPlan === planType ? "border-blue-600" : "border-gray-400"}`}>{selectedPlan === planType && <div className='w-3 h-3 bg-blue-600 rounded-full'></div>}</div>
              <span className='text-gray-700'>{planType.charAt(0).toUpperCase() + planType.slice(1)}</span>
              <input type='text' placeholder='0' className='input-price' disabled={selectedPlan !== planType} />
              <span className='currency'>$</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanSelector;
