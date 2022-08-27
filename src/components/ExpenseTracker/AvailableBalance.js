import { useContext } from "react";

import styled from "styled-components";

import ExpenseContext from "../../context/ExpenseContext";
import { SecondaryHeading, TertiaryHeading } from "../UI/Heading";
import MoneyFormatter from "../../utils/MoneyFormatter";
import { FilterCategory, FilterYear } from "../../utils/Filter";

const Balance = styled.div`
  width: 100%;
  background: ${(props) => props.backgroundColor || "#f2f2f2"};
  padding: 1rem;
  border-radius: 5px;

  @media screen and (max-width: 450px) {
    &:first-child {
      grid-column: 1 / -1;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.gridTemplateColumns || "repeat(3, 1fr)"};
  gap: 1rem;
  margin: ${(props) => props.margin || "0"};

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const AvailableBalance = () => {
  const { transactions, year, category } = useContext(ExpenseContext);

  let filteredTransactions = FilterCategory(transactions, category);
  filteredTransactions = FilterYear(filteredTransactions, year);

  let total = 0,
    income = 0,
    expense = 0;

  filteredTransactions.forEach((transaction) => {
    if (transaction.amount > 0) income += transaction.amount;
    else if (transaction.amount < 0) expense += transaction.amount;
    total += transaction.amount;
  });

  expense = expense > 0 ? -1 : expense;

  return (
    <Grid margin="0 0 2rem 0">
      <Balance backgroundColor="orangered">
        <TertiaryHeading textAlign="left">BALANCE</TertiaryHeading>
        <SecondaryHeading textAlign="left">
          {MoneyFormatter.format(total)}
        </SecondaryHeading>
      </Balance>
      <Balance backgroundColor="#2b8a3e">
        <TertiaryHeading textAlign="left">INCOME</TertiaryHeading>
        <SecondaryHeading textAlign="left">
          {MoneyFormatter.format(income)}
        </SecondaryHeading>
      </Balance>
      <Balance backgroundColor="crimson">
        <TertiaryHeading textAlign="left">EXPENSE</TertiaryHeading>
        <SecondaryHeading textAlign="left">
          {MoneyFormatter.format(Math.abs(expense))}
        </SecondaryHeading>
      </Balance>
    </Grid>
  );
};

export default AvailableBalance;
