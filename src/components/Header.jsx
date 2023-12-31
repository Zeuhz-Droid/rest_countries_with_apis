import styled from "styled-components";
import SwitchMode from "./SwitchMode";

const HeaderContainer = styled.div`
  background-color: var(--white);
  box-shadow: var(--primary-shadow);
`;

const StyledHeader = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledH1 = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
`;

function Header() {
  return (
    <HeaderContainer>
      <StyledHeader>
        <StyledH1>Where in the world?</StyledH1>
        <SwitchMode mode="Light" />
      </StyledHeader>
    </HeaderContainer>
  );
}

export default Header;
