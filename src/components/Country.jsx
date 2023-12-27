import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledCountry = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: var(--white);
`;

const StyledInfo = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  gap: 2rem;
`;

const Span = styled.span`
  font-weight: 300;
`;

function Country({ country }) {
  const navigate = useNavigate();

  const {
    capital: [capital],
    flags: { png, svg, alt },
    name: {
      common: commonName,
      official: officialName,
      nativeName: { official: officialNativeName, common: commonNativeName },
    },
    population,
    region,
  } = country;

  function handleClick(countryName) {
    navigate(`/country/${countryName}`);
  }

  return (
    <StyledCountry onClick={() => handleClick(commonName)}>
      <img src={png} alt={alt} />
      <StyledInfo>
        <h3>{commonName}</h3>
        <div>
          <p>
            Population:&nbsp;
            <Span>{population}</Span>
          </p>
          <p>
            Region:&nbsp;
            <Span>{region}</Span>
          </p>
          <p>
            Capital:&nbsp;
            <Span>{capital}</Span>
          </p>
        </div>
      </StyledInfo>
    </StyledCountry>
  );
}

export default Country;
