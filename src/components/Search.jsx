import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const StyledSearch = styled.div`
  position: relative;
  width: 100%;

  & svg {
    position: absolute;
    top: 65%;
    left: 3%;
    transform: translateY(-50%);
    font: inherit;
    color: var(--dark-gray);
  }
`;

const StyledInput = styled.input`
  width: 50%;
  outline: none;
  border: none;
  appearance: none;
  padding: 1.5rem;
  padding-left: 5rem;
  color: var(--dark-gray);
  box-shadow: var(--rect-shadow);
  border-radius: 0.5rem;
  background-color: var(--white);

  &::placeholder {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Search({ placeholder = "Search for a country..." }) {
  const [country, setCountry] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    if (!country) return;
    searchParams.set("country", country);
    setSearchParams(searchParams);
  }

  function handleFocus(e) {
    if (!e.target.value) {
      searchParams.delete("country");
      setSearchParams(searchParams);
    }
  }

  return (
    <StyledSearch>
      <HiMagnifyingGlass />
      &nbsp;
      <form onSubmit={handleSubmit}>
        <StyledInput
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onBlur={handleFocus}
          type="text"
          placeholder={placeholder}
        />
      </form>
    </StyledSearch>
  );
}

export default Search;
