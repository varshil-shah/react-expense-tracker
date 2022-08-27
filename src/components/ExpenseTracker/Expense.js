import { useContext } from "react";

import styled from "styled-components";
import swal from "sweetalert";

import Flex from "../UI/Flex";
import FormatDate from "../../utils/DateFormatter";
import MoneyFormatter from "../../utils/MoneyFormatter";

import ExpenseContext from "../../context/ExpenseContext";

const List = styled.li`
  background: #dee2e6;
  padding: 0.5rem;
  list-style: none;
  border-left: 5px solid ${(props) => (props.isIncome ? "#2b8a3e" : "crimson")};
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #212121;

  @media screen and (max-width: 525px) {
    font-size: 1.8rem;
  }
`;

const Amount = styled.span`
  font-size: 2.2rem;
  color: ${(props) => (props.isIncome ? "#2b8a3e" : "crimson")};
  font-weight: 700;

  @media screen and (max-width: 525px) {
    font-size: 1.8rem;
  }
`;

const Date = styled.p`
  font-size: 1.4rem;
  color: #495057;

  @media screen and (max-width: 525px) {
    font-size: 1.2rem;
  }
`;

const Expense = (props) => {
  const { onDeleteTransaction } = useContext(ExpenseContext);
  const sign = props.amount > 0 ? "+" : "-";

  const onDeleteTransactionHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, cannot be recovered!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        onDeleteTransaction(id);
        swal("Poof! Your transaction has been deleted!", {
          icon: "success",
        });
      }
    });
  };

  return (
    <List
      isIncome={sign === "+"}
      onClick={() => onDeleteTransactionHandler(props.id)}
    >
      <Flex>
        <div>
          <Title>{props.title}</Title>
          <Date>{FormatDate(props.date)}</Date>
        </div>
        <Amount isIncome={sign === "+"}>{`${sign}${MoneyFormatter.format(
          Math.abs(props.amount)
        )}`}</Amount>
      </Flex>
    </List>
  );
};

export default Expense;
