import styled from "styled-components";

const Button = styled.button`
  font-size: 2rem;
  padding: 1rem 2rem;
  background-color: ${(props) => props.backgroundColor || "crimson"};
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;

  @media screen and (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

export default Button;
