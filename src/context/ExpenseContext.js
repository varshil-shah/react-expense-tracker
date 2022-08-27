import { createContext, useReducer, useState } from "react";
import ExpenseReducer from "../utils/ExpenseReducer";

const getTransactionForLocalStorage = () => {
  let trans = JSON.parse(localStorage.getItem("transactions")) || [];
  trans = trans.map((transaction) => {
    return { ...transaction, date: new Date(transaction.date) };
  });
  return trans;
};

const initialState = {
  year: new Date().getFullYear(),
  category: "all",
  onYearChangeHandler: (year) => {},
  onCategoryChangeHandler: (category) => {},
  transactions: getTransactionForLocalStorage(),
  onDeleteTransaction: (id) => {},
  onAddTransaction: (transaction) => {},
};

const ExpenseContext = createContext(initialState);

export const ExpenseContextProvider = ({ children }) => {
  const [expense, dispatchExpense] = useReducer(ExpenseReducer, initialState);

  const [year, setYear] = useState(() => new Date().getFullYear());
  const [category, setCategory] = useState("all");

  // delete transaction
  const deleteTransactionHandler = (id) => {
    dispatchExpense({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  // add transaction
  const addTransactionHandler = (transaction) => {
    dispatchExpense({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        year,
        category,
        onYearChangeHandler: setYear,
        onCategoryChangeHandler: setCategory,
        transactions: expense.transactions,
        onDeleteTransaction: deleteTransactionHandler,
        onAddTransaction: addTransactionHandler,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
