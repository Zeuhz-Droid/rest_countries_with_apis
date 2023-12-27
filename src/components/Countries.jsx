import styled from "styled-components";
import Country from "./Country";
import { getCountries } from "../services/apiCountries";
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import Search from "./Search";
import Filter from "./Filter";

const StyledCountries = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 5rem;
  margin-top: 5rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  & > div {
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3.5rem;
  }
`;

const regions = [
  { name: "Filter by Region", value: "all" },
  { name: "Africa", value: "africa" },
  { name: "America", value: "america" },
  { name: "Asia", value: "asia" },
  { name: "Europe", value: "europe" },
  { name: "Oceania", value: "oceania" },
];

function Countries() {
  let countries = useLoaderData();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const queriedCountry = searchParams.get("country");
  const queriedFilter = searchParams.get("filter");

  if (queriedCountry) {
    countries = countries.filter(
      (country) =>
        country?.name?.common?.toLowerCase() === queriedCountry?.toLowerCase()
    );
  }

  if (!queriedCountry) countries = countries;

  if (queriedFilter) {
    if (queriedFilter === "all") countries;
    else
      countries = countries.filter(
        (country) =>
          country?.region.toLowerCase() === queriedFilter.toLowerCase()
      );
  }

  return (
    <>
      <Row>
        <Search />
        <Filter name="Filter by Region" options={regions} />
      </Row>
      <StyledCountries>
        {countries?.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      </StyledCountries>
    </>
  );
}

export async function loader() {
  const countries = await getCountries();

  return countries;
}

export default Countries;
