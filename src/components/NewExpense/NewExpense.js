import React, { useState, useContext } from "react";

import { v4 } from "uuid";
import swal from "sweetalert";
import styled from "styled-components";

import ExpenseContext from "../../context/ExpenseContext";

import Card from "../UI/Card";
import { PrimaryHeading } from "../UI/Heading";
import Button from "../UI/Button";
import Flex from "../UI/Flex";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 2rem;
  color: #212121;

  @media screen and (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #adb5bd;
  outline: none;
  padding: 1rem;
  font-size: 1.8rem;

  @media screen and (max-width: 450px) {
    font-size: 1.6rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  color: #212121;
`;

const Span = styled.span`
  color: ${(props) => props.color || "crimson"};
  font-size: 2rem;
  font-weight: bold;
`;

const getFormattedCurrentDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return `${year}-${month}-${day}`;
};

const NewExpense = () => {
  const { onAddTransaction } = useContext(ExpenseContext);

  const currentYear = new Date().getFullYear();
  const currentDate = getFormattedCurrentDate();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(currentDate);

  const resetAllValues = () => {
    setTitle("");
    setAmount(0);
    setDate(currentDate);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!title.trim().length || !amount || !date) {
      return swal({
        title: "Form Validation!",
        text: "Please fill in all fields.",
        icon: "warning",
      });
    }

    const newTransaction = {
      id: v4(),
      title,
      amount: +amount,
      date: new Date(date),
    };

    onAddTransaction(newTransaction);
    resetAllValues();
  };

  return (
    <Card>
      <PrimaryHeading margin="0 0 2rem 0">New Expense</PrimaryHeading>
      <Form onSubmit={onSubmitHandler}>
        <FormControl>
          <Label>Enter transaction title</Label>
          <Input
            value={title}
            placeholder="A new book"
            type="text"
            onChange={(event) => setTitle(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <Label>Enter transaction amount</Label>
          <Input
            value={amount}
            placeholder="Amount"
            type="number"
            onChange={(event) => setAmount(event.target.value)}
          />
          <Paragraph>
            Use <Span>-</Span> for expense.
          </Paragraph>
        </FormControl>
        <FormControl>
          <Label>Select transaction date</Label>
          <Input
            value={date}
            type="date"
            min={`${currentYear - 2}-01-01`}
            max={`${currentYear}-12-31`}
            onChange={(event) => setDate(event.target.value)}
          />
        </FormControl>
        <Flex justifyContent="flex-end">
          <Button
            backgroundColor="#2b8a3e"
            type="reset"
            onClick={resetAllValues}
          >
            Reset
          </Button>
          <Button type="submit">Add Expense</Button>
        </Flex>
      </Form>
    </Card>
  );
};

export default NewExpense;
