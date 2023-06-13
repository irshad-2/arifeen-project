import React, { useState } from "react";

// packages
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Main from "./Component/Screens/Main";
import AsideBar from "./Component/Includes/AsideBar";
import Loading from "./Component/Screens/Loading";
import PythonModal from "./Component/Includes/Modals/PythonModal";
import PhpModal from "./Component/Includes/Modals/PhpModal";
import ASPModal from "./Component/Includes/Modals/ASPModal";
import RubyModal from "./Component/Includes/Modals/RubyModal";

function App() {
  const [isOpen, setOpen] = useState("");

  return (
    <>
      <BrowserRouter>
        {isOpen === "python" && <PythonModal onClose={() => setOpen("")} />}
        {isOpen === "PHP" && <PhpModal onClose={() => setOpen("")} />}
        {isOpen === "ASP" && <ASPModal onClose={() => setOpen("")} />}
        {isOpen === "Ruby" && <RubyModal onClose={() => setOpen("")} />}

        <MainContainer>
          <AsideBar />
          <SubContainer>
            <Routes>
              <Route path="/" element={<Main setOpen={setOpen} />} />
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
