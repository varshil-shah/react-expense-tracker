import { useContext } from "react";

import styled from "styled-components";

import Flex from "../UI/Flex";
import YearComponent from "./YearComponent";
import Category from "../../utils/Category";

import ExpenseContext from "../../context/ExpenseContext";

const Title = styled.h3`
  font-size: ${(props) => props.fontSize || "2.8rem"};
  color: ${(props) => props.color || "#FFF"};
  text-align: ${(props) => props.textAlign || "center"};
  margin: ${(props) => props.margin || "0rem"};

  @media screen and (max-width: 525px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

const Select = styled.select`
  width: auto;
  outline: none;
  padding: 0.5rem 2rem;
  font-size: 2rem;

  @media screen and (max-width: 525px) {
    font-size: 1.6rem;
    padding: 0.5rem 1rem;
  }
`;

const ExpensesHistory = () => {
  const endYear = new Date().getFullYear();
  const { year, category, onYearChangeHandler, onCategoryChangeHandler } =
    useContext(ExpenseContext);

  return (
    <Flex>
      <Title color="#212121">History</Title>
      <Flex>
        <YearComponent
          start={endYear - 2}
          end={endYear}
          year={year}
          onYearChange={onYearChangeHandler}
        />
        <Select
          value={category}
          onChange={(event) => onCategoryChangeHandler(event.target.value)}
        >
          <option value={Category.All}>All</option>
          <option value={Category.Income}>Income</option>
          <option value={Category.Expense}>Expenses</option>
        </Select>
      </Flex>
    </Flex>
  );
};

export default ExpensesHistory;
