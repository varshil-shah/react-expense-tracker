import React from "react";

import Card from "../UI/Card";
import { PrimaryHeading } from "../UI/Heading";
import AvailableBalance from "./AvailableBalance";
import ExpensesHistory from "./ExpensesHistory";
import Expenses from "./Expenses";

const ExpenseTracker = () => {
  return (
    <Card>
      <PrimaryHeading margin="0 0 1rem 0">Expense Tracker</PrimaryHeading>
      <AvailableBalance />
      <ExpensesHistory />
      <Expenses />
    </Card>
  );
};

export default ExpenseTracker;
