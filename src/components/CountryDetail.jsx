import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCountry } from "../services/apiCountries";
import { HiArrowLongLeft } from "react-icons/hi2";
import { addComma } from "../utils/helper";
import Error from "./Error";

const StyledCountryDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;

  @media (max-width: 768px) {
    gap: 5rem;
  }
`;

const BackButton = styled.button`
  appearance: none;
  border: none;
  outline: none;
  padding: 1rem 3rem;
  align-self: flex-start;
  color: var(--dark-blue);
  background-color: var(--white);
  box-shadow: var(--rect-shadow);
  border-radius: 1rem;
  transition: transform 0.3s linear;

  &:hover {
    transform: scale(1.05);
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => (props.space ? props.space : "30rem")}, 1fr)
  );
  gap: 10rem;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const BoldText = styled.span`
  font-weight: 600;
`;

const BorderCountries = styled.span`
  display: inline-block;
  margin-left: 0.3rem;
  gap: 0.5rem;

  & span {
    font-size: 1.3rem;
    padding: 0.4rem 2rem;
    box-shadow: var(--rect-shadow);
    border-radius: 0.5rem;
    border: 1px solid var(--very-light-gray);
    background-color: var(--white);

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

const ImgContainer = styled.div`
  & img {
    width: 100%;
    height: auto;
  }
`;

const SpaceUp = styled.div`
  justify-self: flex-end;
  margin-top: 3rem;
`;

function CountryDetail() {
  const country = useLoaderData();
  const navigate = useNavigate();

  const {
    flags: { png, svg, alt },
    name: { common: commonName, nativeName },
    tld: [topLevelDomain],
    currencies,
    capital: [capitalCity],
    region,
    subregion,
    borders,
    languages,
    population,
  } = country[0];

  return (
    <StyledCountryDetail>
      <BackButton
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        <HiArrowLongLeft />
        &nbsp;
        <span>Back</span>
      </BackButton>
      {country.length ? (
        <Row space="30rem">
          <ImgContainer>
            <img src={png} alt={alt} />
          </ImgContainer>
          <Details>
            <h2>{commonName}</h2>
            <Row space="20rem">
              <div>
                <p>
                  <BoldText>Native Name:</BoldText>
                  &nbsp;
                  <span>{Object.values(nativeName)[0].official}</span>
                </p>
                <p>
                  <BoldText>Population:</BoldText>
                  &nbsp;
                  <span>{addComma(population)}</span>
                </p>
                <p>
                  <BoldText>Region:</BoldText>
                  &nbsp;
                  <span>{region}</span>
                </p>
                <p>
                  <BoldText>Sub Region:</BoldText>
                  &nbsp;
                  <span>{subregion}</span>
                </p>
                <p>
                  <BoldText>Capital:</BoldText>
                  &nbsp;
                  <span>{capitalCity}</span>
                </p>
              </div>
              <div>
                <p>
                  <BoldText>Top Level Domain:</BoldText>
                  &nbsp;
                  <span>{topLevelDomain}</span>
                </p>
                <p>
                  <BoldText>Currencies:</BoldText>
                  &nbsp;
                  <span>{Object.values(currencies)[0].name}</span>
                </p>
                <p>
                  <BoldText>Languages:</BoldText>
                  &nbsp;
                  <span>{Object.values(languages).join(", ")}</span>
                </p>
              </div>
            </Row>
            <SpaceUp>
              <BoldText>Border Countries:</BoldText>
              &nbsp;
              <BorderCountries>
                {Object.values(languages).map((lang) => (
                  <span key={lang}>{lang}</span>
                ))}
              </BorderCountries>
            </SpaceUp>
          </Details>
        </Row>
      ) : (
        <Error />
      )}
    </StyledCountryDetail>
  );
}

export async function loader({ params }) {
  const country = await getCountry(params.countryName);

  return country;
}

export default CountryDetail;
