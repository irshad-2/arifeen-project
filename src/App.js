import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Component/Screens/Main";
import AsideBar from "./Component/Includes/AsideBar";
import Loading from "./Component/Screens/Loading";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainContainer>
          <AsideBar />
          <SubContainer>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/coming-soon" element={<Loading />} />
            </Routes>
          </SubContainer>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
`;

const SubContainer = styled.div`
  width: 100%;
`;
