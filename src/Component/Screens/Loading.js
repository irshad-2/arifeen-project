import React from "react";
import { styled } from "styled-components";

function Loading() {
  return (
    <MainContainer>
      <ComingSoon>
        <ImgSoon
          src={require("../../assets/images/Comingsoon3.png")}
          alt="Image1"
        />
      </ComingSoon>
    </MainContainer>
  );
}

export default Loading;

const MainContainer = styled.div`
  width: 85%;
`;
const ComingSoon = styled.div``;
const ImgSoon = styled.img`
  display: block;
  width: 100%;
`;
