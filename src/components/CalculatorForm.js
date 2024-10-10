import React, { useState } from 'react'

function CalculatorForm({ onUpdateParams }) {
    const [currency, setCurrency] = useState('USD')
    const [numberOfUsers, setNumberOfUsers] = useState(1)

    const handleCurrencyChange = (e) => {
        const newCurrency = e.target.value
        setCurrency(newCurrency)
        onUpdateParams({ currency: newCurrency })
    }

    const handleUserChange = (e) => {
        const newNumberOfUsers = parseInt(e.target.value, 10)
        setNumberOfUsers(newNumberOfUsers)
        onUpdateParams({ numberOfUsers: newNumberOfUsers })
    }

    return (
        <div className="calculator-form">
            <form>
                <div className="currency-selection">
                    <h3>Choose Currency: </h3>
                    <label>
                        <input
                            type="radio"
                            name="currency"
                            value="USD"
                            checked={currency === 'USD'}
                            onChange={handleCurrencyChange}
                        />
                        USD ($)
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="currency"
                            value="EUR"
                            checked={currency === 'EUR'}
                            onChange={handleCurrencyChange}
                        />
                        EUR (€)
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="currency"
                            value="GBP"
                            checked={currency === 'GBP'}
                            onChange={handleCurrencyChange}
                        />
                        GBP (£)
                    </label>
                </div>
                <div className="container">
                    <div className="grid-block">
                        <div className="block-users">
                            <label>
                                Number of Users:
                                <input
                                    type="number"
                                    value={numberOfUsers}
                                    min="1"
                                    onChange={handleUserChange}
                                />
                            </label>
                        </div>
                        <div className="current-expenses-block"></div>
                        <div className="updated-expenses-block"></div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CalculatorForm;
