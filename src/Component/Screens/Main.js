import React from "react";
import styled from "styled-components";
import AsideBar from "../Includes/AsideBar";
import { Link } from "react-router-dom";

function Main() {
  return (
    <GridMain>
      <SideBar>
        <Nav />
      </SideBar>
      <Header>
        <HeaderContainer>
          <Innerbox>
            <Left>
              <LinkImageContainer>
                <LogoImage
                  src={
                    require("../../assets/images/Property 1=serach.svg").default
                  }
                  alt="logo"
                />
              </LinkImageContainer>
              <Images>
                <ImageTag>
                  <StateImage
                    src={
                      require("../../assets/images/Component 429.svg").default
                    }
                    alt="Image"
                  />
                  <StateName>United States</StateName>
                </ImageTag>
                <ImageTags>
                  <ArrowImage
                    src={
                      require("../../assets/images/Property 1=arrow.svg").default
                    }
                    alt="Image"
                  />
                  <ArrowName>87%</ArrowName>
                </ImageTags>
              </Images>
            </Left>
            <LineTag></LineTag>
          </Innerbox>

          <Middle>
            <PropertyImage   src={require("../../assets/images/Property 1=night.svg").default}
              alt="Dark theme image"/>

              <BellImage src={require("../../assets/images/Property 1=bell.svg").default}
              alt="Notification image"/>
          </Middle>

          <Right>
            <FrameImage src={require("../../assets/images/Frame 3466889.png").default}
              alt="frame"/>

            <TagImage  src={require("../../assets/images/Property 1=down.svg").default}
              alt="arrow"/>
          </Right>

        </HeaderContainer>
      </Header>
    </GridMain>
  );
}

export default Main;

const GridMain = styled.div``;

const SideBar = styled.div``;

const Nav = styled.span``;

const Header = styled.div``;

const HeaderContainer = styled.div``;

const Innerbox = styled.div``;

const Left = styled.div``;

const LinkImageContainer = styled(Link)``;

const LogoImage = styled.img``;

const Images = styled.div``

const ImageTag = styled.div``

const StateImage = styled.img``

const StateName = styled.p``

const ImageTags = styled.div``

const ArrowImage = styled.img``

const ArrowName = styled.p``

const  LineTag = styled.hr``

const Middle = styled.div``

const PropertyImage = styled.img``

const BellImage =styled.img``

const Right = styled.div``

const  FrameImage  = styled.img``

const TagImage  = styled.img``