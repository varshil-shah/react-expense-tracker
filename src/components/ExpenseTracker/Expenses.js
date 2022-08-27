import { useContext } from "react";

import styled from "styled-components";

import Expense from "./Expense";
import ExpenseContext from "../../context/ExpenseContext";
import { SecondaryHeading } from "../UI/Heading";
import { FilterCategory, FilterYear } from "../../utils/Filter";

const ExpensesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 21rem;
  margin: 2rem auto;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
    background: #adb5bd;
  }

  ::-webkit-scrollbar-thumb {
    background: #495057;
  }
`;

const Expenses = () => {
  const { transactions, year, category } = useContext(ExpenseContext);

  let filteredTransactions = FilterCategory(transactions, category);
  filteredTransactions = FilterYear(filteredTransactions, year);

  let expenseContent = (
    <SecondaryHeading color="#212121">No expense found!</SecondaryHeading>
  );

  if (filteredTransactions.length > 0) {
    expenseContent = filteredTransactions.map((transaction) => {
      return (
        <Expense
          id={transaction.id}
          key={transaction.id}
          title={transaction.title}
          date={transaction.date}
          amount={transaction.amount}
        />
      );
    });
  }

  return <ExpensesContainer>{expenseContent}</ExpensesContainer>;
};

export default Expenses;
