import React from 'react';
import BalanceCard from '../../components/currencyConverter/CurrencyConverter';
import TransactionsTable from '../../components/transactionTable/TRansactionTablbe';
import SpendingSummary from '../../components/transactionList/TransactionList';
import CardsOverview from '../../components/summaryCard/SummaryCard';
function Dashboard() {
  return (
    <div className="dashboard flex p-4">
      <div className="row g-4">
        <div className="col-md-12">
          <div className="row g-4">
            <div className="col-4">
              <BalanceCard
                totalBalance="18.000.000"
                totalIncome="3,50,000.00"
                totalExpense="83,000.00"
              />
            </div>
            <div className="col-md-8">
              <div className="row g-6">
                <div className="col-6 min-h-full">
                  <SpendingSummary />
                </div>
                <div className="col-6">
                  <CardsOverview />
                </div>
              </div>
            </div>
            <div className="col-12">
              <TransactionsTable />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;