import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import { TransactionsProvider } from './contexts/TransactionContext'
import CardsOverview from './components/summaryCard/SummaryCard'

const App = () => {
  return (
    <TransactionsProvider>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />} />
          <Route path='/exchange' element={<CardsOverview />} />
        </Routes>
      </Router>
    </TransactionsProvider>
  )
}

export default App
