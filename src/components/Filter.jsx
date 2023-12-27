import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 2rem;
  padding-right: 6rem;
  font-weight: 600;
  border-radius: 0.5rem;
  background-color: var(--white);
  box-shadow: var(--rect-shadow);
  border: 1px solid var(--white);

  & option {
    padding: 1.5rem;
    background-color: inherit;

    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;

function Filter({ options }) {
  const [filter, setFilter] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilter(e) {
    setFilter(e.target.value);
    searchParams.set("filter", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <StyledSelect value={filter} onChange={handleFilter}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Filter;
