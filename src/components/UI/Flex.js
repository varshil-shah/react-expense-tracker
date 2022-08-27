import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${(props) => props.gap || "1rem"};
  margin: ${(props) => props.margin || "0"};
`;

export default Flex;
