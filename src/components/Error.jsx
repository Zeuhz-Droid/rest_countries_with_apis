import styled from "styled-components";

const StyledError = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: var(--dark-blue);
`;

function Error({ type = "country" }) {
  let message;
  if (type === "countryDetail")
    message = "Sorry this country doesn't have details, Yet.";
  if (type === "country") message = "country NOT Found";
  if (type === "countries") message = "couldn't Fetch Countries.";

  return (
    <StyledError>
      <StyledH1>{message}</StyledH1>
    </StyledError>
  );
}

export default Error;
