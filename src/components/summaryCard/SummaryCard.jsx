import React, { Fragment, useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { LuArrowUpDown } from "react-icons/lu";
import { useTransactions } from "../../contexts/TransactionContext";



function CardsOverview() {
  const { exchangeRates } = useTransactions()

  const [cards, setCards] = useState([]);
  useEffect(() => {
    if (Object.keys(exchangeRates).length > 0) {
      const initialCards = [
        {
          currency: "USD",
          amount: exchangeRates["USD"], 
        },
        {
          currency: "EUR",
          amount: exchangeRates["EUR"], 
        },
        {
          currency: "UZS",
          amount: exchangeRates["UZS"], 
        },
      ];
      setCards(initialCards);
    }
  }, [exchangeRates]);
  const truncateNumber = (number, decimalPlaces) => {
    const parts = number.toString().split('.');
    if (parts.length === 2) {
      return `${parts[0]}.${parts[1].substring(0, decimalPlaces)}`;
    }
    return number;
  };

  const handleAmountChange = (value, currency) => {
    const baseAmount = value / exchangeRates[currency];
    const updatedCards = cards.map((card) => ({
      ...card,
      amount: truncateNumber(truncateNumber(baseAmount * exchangeRates[card.currency], 2)),
    }));
    setCards(updatedCards); 
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Your Cards</Card.Title>
        <div className="cards-container">
          {cards.map((card, index) => (
            <Fragment key={index}>
              <div className="credit-card bg-dark text-white p-3 mb-3 rounded">
                <Form>
                  <Form.Label>{card.currency}</Form.Label>
                  <Form.Control
                    type="number"
                    value={card.amount}
                    onChange={(e) =>
                      handleAmountChange(Number(e.target.value), card.currency)
                    }
                  />
                </Form>
              </div>
              {index < cards.length - 1 && (
                <div className="text-center my-3">
                  <LuArrowUpDown size={24} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardsOverview;
