import React from 'react'
import Header from './components/Header'
import CalculatorForm from './components/CalculatorForm'
import CostBreakdown from './components/CostBreakdown'
import ResultDisplay from './components/ResultDisplay'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <CalculatorForm />
      <CostBreakdown />
      <ResultDisplay />
      <Footer />
    </div>
  )
}

export default App