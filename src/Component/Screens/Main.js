import React from "react";
import styled from "styled-components";
import AsideBar from "../Includes/AsideBar";
import { Link } from "react-router-dom";

function Main() {
  return (
    <MainSection>
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
              <Input type="text" placeholder="" />
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
                      require("../../assets/images/Property 1=arrow.svg")
                        .default
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
            <PropertyImage
              src={require("../../assets/images/Property 1=night.svg").default}
              alt="Dark theme image"
            />

            <BellImage
              src={require("../../assets/images/Property 1=bell.svg").default}
              alt="Notification image"
            />
          </Middle>

          <Right>
            <ProfileImg>
              <FrameImage
                src={require("../../assets/images/Frame 3466889.png")}
                alt="frame"
              />
            </ProfileImg>

            <AddImage>
              <AddImg
                src={
                  require("../../assets/images/Property 1=plus w.svg").default
                }
              />
            </AddImage>
            <TagImage
              src={require("../../assets/images/Property 1=down.svg").default}
              alt="arrow"
            />
          </Right>
        </HeaderContainer>
      </Header>
    </MainSection>
  );
}

export default Main;

const MainSection = styled.div`
  background-color: #212236;
  height: 100vh;
`;

const Header = styled.div``;

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Innerbox = styled.div`
  width: 85%;
`;
const Input = styled.input`
  width: 70%;
  padding: 10px;
  font-size: 16px;
  background: #212236;
  border: none;
  outline: none;
  color: #fff;
`;
const Left = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const LinkImageContainer = styled(Link)`
  width: 40px;
`;

const LogoImage = styled.img`
  display: block;
  width: 40%;
`;

const Images = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageTag = styled.div`
  display: flex;
  width: 45%;
  align-items: center;
  justify-content: space-between;
`;

const StateImage = styled.img`
  width: 25%;
  display: block;
  border-radius: 50%;
`;

const StateName = styled.span`
  font-size: 10px;
  color: #727488;
`;
const ImageTags = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
`;
const ArrowImage = styled.img`
  display: block;
  width: 25%;
  background: #24253d;
  border-radius: 50%;
  margin-right: 10px;
`;

const ArrowName = styled.p`
  color: #727488;
  font-size: 10px;
`;

const LineTag = styled.hr`
  border-bottom: 1px solid #727488;
  width: 100%;
`;

const Middle = styled.div`
  width: 10%;
  padding-right: 20px;
  display: flex;
  margin-left: 59px;
`;

const PropertyImage = styled.img`
  width: 15%;
  display: flex;
  margin-right: 10px;
`;

const BellImage = styled.img`
  width: 15%;
  display: block;
`;

const Right = styled.div`
  width: 10%;
  padding-right: 20px;
  display: flex;
  position: relative;
`;
const ProfileImg = styled.div`
  width: 30px;
  margin-right: 10px;
`;
const AddImage = styled.div`
  width: 15px;
  position: absolute;
  top: 15px;
  left: 15px;
`;
const AddImg = styled.img`
  width: 100%;
  display: block;
  background: #53489c;
  border: 2px solid #fff;
  border-radius: 50%;
`;
const FrameImage = styled.img`
  width: 100%;
  border-radius: 50%;
  display: block;
`;

const TagImage = styled.img`
  width: 13%;
  display: block;
`;
