import styled from "styled-components";

const Card = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: ${(props) => props.width || "60rem"};
  max-width: ${(props) => props.maxWidth || "60rem"};
  background: ${(props) => props.backgroundColor || "#fff"};
  padding: ${(props) => props.padding || "2rem"};

  @media screen and (max-width: 650px) {
    width: 50rem;
  }

  @media screen and (max-width: 525px) {
    width: 40rem;
  }

  @media screen and (max-width: 450px) {
    width: 32rem;
  }
`;

export default Card;
