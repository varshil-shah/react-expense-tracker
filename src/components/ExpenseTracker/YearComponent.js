import styled from "styled-components";

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

const YearComponent = ({ start, end, onYearChange, year }) => {
  return (
    <Select
      value={year}
      onChange={(event) => onYearChange(+event.target.value)}
    >
      {Array.from({ length: end - start + 1 }, (_, k) => {
        return (
          <option key={k} value={start + k}>
            {start + k}
          </option>
        );
      })}
    </Select>
  );
};

export default YearComponent;
