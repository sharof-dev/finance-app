import React, { useState } from 'react';
import { Card, Table, Form, Button } from 'react-bootstrap';
import { useTransactions } from '../../contexts/TransactionContext';
import Modals from "../modal/Modal";

function TransactionsTable() {

  const { transactions, baseCurrency, setBaseCurrency } = useTransactions();
  const [selectedCurrency, setSelectedCurrency] = useState(baseCurrency);
  const [show, setShow] = useState(false);
  const [filters, setFilters] = useState({ startDate: "", endDate: "", category: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeCurrency = (e) => {
    const newCurrency = e.target.value;
    setBaseCurrency(newCurrency);
    setSelectedCurrency(newCurrency);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    if (!transactions || transactions.length === 0) return [];
    const { startDate, endDate, category } = filters;
    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date.replace(/-/g, '/'));
      return (
        (!startDate || transactionDate >= new Date(startDate)) &&
        (!endDate || transactionDate <= new Date(endDate)) &&
        (!category || transaction.mode.toLowerCase().includes(category.toLowerCase()))
      );
    });
  };

  const filteredTransactions = applyFilters();

  return (
    <Card className="bg-dark">
      <Card.Body>
        <Card.Title className='text-white'>Recent Transactions</Card.Title>
        <div className='d-flex justify-content-between gap-4 mb-4'>
          <div className='d-flex gap-3'>
            <select
              id="currency"
              value={selectedCurrency}
              onChange={handleChangeCurrency}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="UZS">UZS</option>
            </select>
          <div>
            <Modals show={show} handleClose={handleClose} handleShow={handleShow} />
          </div>
          </div>
          <Form >
          <div className="d-flex gap-3">
            <Form.Group>
              <Form.Label className="text-white">Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={filters.startDate}
                onChange={handleFilterChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-white">End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={filters.endDate}
                onChange={handleFilterChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-white">Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="e.g., Cash, Credit Card"
                value={filters.category}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </div>
        </Form>
        </div>

       

        <Table responsive className='table-dark text-white'>
          <thead className='thead-dark'>
            <tr>
              <th>Name</th>
              <th>Mode</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions && filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td style={{ padding: "10px", border: "1px solid #444" }}>{transaction.name}</td>
                  <td style={{ padding: "10px", border: "1px solid #444" }}>{transaction.mode}</td>
                  <td style={{ padding: "10px", border: "1px solid #444" }}>{transaction.date}</td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #444",
                      color: transaction.amount > 0 ? "lightgreen" : "red",
                    }}
                  >
                    {transaction.convertedAmount > 0 ? "+" : ""}
                    {transaction.convertedAmount}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No Transactions Available
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default TransactionsTable;
