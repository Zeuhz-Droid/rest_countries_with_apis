import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Main = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const AppLayout = () => {
  return (
    <>
      <GlobalStyles />
      <Column>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </Column>
    </>
  );
};

export default AppLayout;

// (HomePage-- > QueryBar) & CountryCard;
// CountryDetail;
