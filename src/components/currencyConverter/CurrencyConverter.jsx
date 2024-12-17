import React from 'react';
import { Card } from 'react-bootstrap';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function BalanceCard({ totalBalance, totalIncome, totalExpense }) {
  return (
    <div className="balance-cards">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Total Balance</Card.Title>
          <h2>$ {totalBalance}</h2>
          <small className="text-success">
            <FaArrowUp /> 5.6% Speed
          </small>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Total Income</Card.Title>
          <h2>$ {totalIncome}</h2>
          <small className="text-success">
            <FaArrowUp /> 3.80%
          </small>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Total Expense</Card.Title>
          <h2>$ {totalExpense}</h2>
          <small className="text-danger">
            <FaArrowDown /> 4.62%
          </small>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BalanceCard;