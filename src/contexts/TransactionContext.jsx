import React, { createContext, useContext, useEffect, useState } from "react";
import { getItem, setItem } from "../hooks/useLocalStorage";

const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(getItem("transactions") && []);
  const [exchangeRates, setExchangeRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [isFetched, setIsFetched] = useState(false)
  console.log(getItem("transactions"))

  const mockTransactions = [
    { id: 1, name: "Figma Subscription", mode: "Credit Card", date: "26-06-2022", amount: -1950 },
    { id: 2, name: "John Doe", mode: "Debit Card", date: "20-06-2022", amount: 15000 },
    { id: 3, name: "Dribble Subscription", mode: "Credit Card", date: "19-06-2022", amount: -1600 },
    { id: 4, name: "Bank Transfer", mode: "Bank", date: "15-06-2022", amount: -50000 },
    { id: 5, name: "New York Times", mode: "Credit Card", date: "07-06-2022", amount: -3000 },
  ];

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/96f2727b47a79ff43083f31a/latest/${baseCurrency}`
      );
      const data = await response.json();
      setExchangeRates(data.conversion_rates);
      setIsFetched(true);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  const getConvertedTransactions = () => {
    if (!exchangeRates || Object.keys(exchangeRates).length === 0) return transactions;
    return transactions.map((transaction) => ({
      ...transaction,
      convertedAmount: parseFloat(
        (transaction.amount * (exchangeRates[baseCurrency] || 1)).toFixed(2)
      ),
    }));
  };
  useEffect(() => {
    if(!isFetched){
      fetchExchangeRates();
      setTransactions(mockTransactions);
      setIsFetched(true);
    }
  }, [baseCurrency,isFetched]);
  useEffect(() => {
    setItem("transactions", transactions); 
  }, [transactions]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions: getConvertedTransactions(),
        baseCurrency,
        setBaseCurrency,
        exchangeRates,
        setTransactions
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error("useTransactions must be used within a TransactionsProvider");
  }
  return context;
};
