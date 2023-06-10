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

      <MiddleSection>
        <HeadSection>
          <LeftSection>
            <Head>Hi Mikey!</Head>
          </LeftSection>
          <RightSection>
            <State>
              <Image
                src={require("../../assets/images/Component 429.svg").default}
                alt="image"
              />
            </State>
            <Name>US Sever</Name>
            <Arrow>
              <ArrowIcon
                src={require("../../assets/images/Property 1=down.svg").default}
                alt="image"
              />
            </Arrow>

            <Icon>
              <IconImage
                src={require("../../assets/images/Property 1=control.svg").default}
                alt="image"
              />
            </Icon>
            <DotIcon>
            <DotImage
                src={require("../../assets/images/Property 1=menu.svg").default}
                alt="image"
              />
            </DotIcon>
          </RightSection>
        </HeadSection>

        <StorageSection>
          <Storage>
          <ListItem>
              <FirstNumber>35/40 </FirstNumber>
              <Name12>GB</Name12>
              <Name1>storage</Name1>
              <Name2>+Add More</Name2>
            </ListItem>
          </Storage>
        </StorageSection>
      </MiddleSection>
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



const MiddleSection = styled.div`
  width: 70%;
  text-align: center;
`;
const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 20px;
  padding-bottom: 47px; */
`;
const LeftSection = styled.div`
  margin-top: 27px;
`;
const Head = styled.h1`
  font-size: 15px;
  font-weight: 100;
  color: #fff;
  margin-left: 60px;
`;
const RightSection = styled.div`
  display: flex;
  width: 36%;
`;
const State = styled.div`

width:7%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
  margin: 8px auto;
`;
const Name = styled.h1`
  font-size: 15px;
  font-weight: 100;
  margin-left: 7px;
  color: #67636f;
  margin-right: 26px;

`;
const Arrow = styled.div`
width: 20px;
margin-right: 10px;
`;

const ArrowIcon = styled.img`
display: block;
  width: 100%;
  border-radius: 50%;
  margin: 8px auto;
`;

const Icon = styled.div`
width: 20px;
margin-right: 10px;
`;

const IconImage = styled.img`
display: block;
  width: 100%;
  border-radius: 50%;
  margin: 8px auto;
`;


const DotIcon = styled.div`
width: 20px;
margin-right: 10px;

`;

const DotImage = styled.img`
display: block;
  width: 100%;
  border-radius: 50%;
  margin: 9px auto;
`;


const StorageSection = styled.div`
  background-color: #212236;
  /* margin-left: 30px; */
  padding-top: 67px;
  /* padding-right: 20px; */
  /* height: 117px; */
  /* border-radius: 10px; */
`;
const Storage = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -43px;
  margin-left: 80px;
  width: 80%;
`;
const ListItem = styled.div`

`;
const FirstNumber = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: #fff;
`;
const Name12 = styled.span`
 color: #67636f;
 margin-top: 20px;
`;
const Name1 = styled.span`
 font-size: 20px;
  font-weight: 100;
  color: #fff;
`;
const Name2 = styled.span`

`;