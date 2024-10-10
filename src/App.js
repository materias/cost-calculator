import Header from './components/Header'
import Footer from './components/Footer'
import React, { useState } from 'react'
import CalculatorForm from './components/CalculatorForm'

function App() {
  const [params, setParams] = useState({
    currency: 'USD',
    numberOfUsers: 1,
  })

  const handleUpdateParams = (newParams) => {
    setParams((prevParams) => ({
      ...prevParams,
      ...newParams,
    }))
  }

  return (
    <div className="App">
      <Header />
      <CalculatorForm params={params} onUpdateParams={handleUpdateParams} />
      <Footer />
    </div>
  )
}

export default App
