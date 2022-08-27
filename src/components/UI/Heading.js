import styled from "styled-components";

export const PrimaryHeading = styled.h1`
  font-size: ${(props) => props.fontSize || "3.2rem"};
  color: ${(props) => props.color || "#212121"};
  text-align: ${(props) => props.textAlign || "center"};
  margin: ${(props) => props.margin || "0rem"};

  @media screen and (max-width: 525px) {
    font-size: 2.6rem;
  }
`;

export const SecondaryHeading = styled.h2`
  font-size: ${(props) => props.fontSize || "2.5rem"};
  color: ${(props) => props.color || "#FFF"};
  text-align: ${(props) => props.textAlign || "center"};
  margin: ${(props) => props.margin || "0rem"};

  @media screen and (max-width: 525px) {
    font-size: 2.2rem;
  }

  /* @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  } */
`;

export const TertiaryHeading = styled.h3`
  font-size: ${(props) => props.fontSize || "1.8rem"};
  color: ${(props) => props.color || "#FFF"};
  text-align: ${(props) => props.textAlign || "center"};
  margin: ${(props) => props.margin || "0rem"};
  letter-spacing: 1.1px;

  @media screen and (max-width: 525px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
  }
`;
