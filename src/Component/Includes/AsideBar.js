import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export default function AsideBar() {
  return (
    <MainContainer>
      <SectionContainer>
        <LeftContainer>
          <TagContainer>
            <TagName>a</TagName>
            <Heading>arifeen</Heading>
          </TagContainer>
          <ListTagItem>
            <LinkItems to="">
              <ImageButton>
                <LinkImage
                  src={
                    require("../../assets/images/Property 1=dashboard.svg")
                      .default
                  }
                  alt="Image1"
                />
              </ImageButton>
              <LinkName to="/">DashBoard</LinkName>
            </LinkItems>
            <LinkItems to="">
              <ImageButton>
                <LinkImage
                  src={
                    require("../../assets/images/Property 1=all.svg").default
                  }
                  alt="Image1"
                />
              </ImageButton>
              <LinkName to="/coming-soon">All Files</LinkName>
            </LinkItems>
            <LinkItems to="/coming-soon">
              <ImageButton>
                <LinkImage
                  src={
                    require("../../assets/images/Property 1=share.svg").default
                  }
                  alt="Image1"
                />
              </ImageButton>
              <LinkName to="/coming-soon">Shared</LinkName>
            </LinkItems>

            <LinkItems to="">
              <ImageButton>
                <LinkImage
                  src={
                    require("../../assets/images/Property 1=like.svg").default
                  }
                  alt="Image1"
                />
              </ImageButton>
              <LinkName to="/coming-soon">Favourites</LinkName>
            </LinkItems>

            <LinkItems to="">
              <ImageButton>
                <LinkImage
                  src={
                    require("../../assets/images/Property 1=unread.svg").default
                  }
                  alt="Image1"
                />
              </ImageButton>
              <LinkName to="/coming-soon">Recent</LinkName>
            </LinkItems>

            <LinkItems to="">
              <ImageButton>
                <LinkImage
                  src={
                    require("../../assets/images/Property 1=reduce.svg").default
                  }
                  alt="Image1"
                />
              </ImageButton>
              <LinkName to="/coming-soon">Request</LinkName>
            </LinkItems>
          </ListTagItem>
          <ListMainItem>
            <ListMain>
              <ImageButtonTag>
                <TagImages
                  src={
                    require("../../assets/images/Property 1=camera.svg").default
                  }
                  alt="Image"
                />
              </ImageButtonTag>
              <TagNames>Picture</TagNames>
            </ListMain>

            <ListMain>
              <ImageButtonTag>
                <TagImages
                  src={
                    require("../../assets/images/Property 1=vedio.svg").default
                  }
                  alt="Image"
                />
              </ImageButtonTag>
              <TagNames>video</TagNames>
            </ListMain>

            <ListMain>
              <ImageButtonTag>
                <TagImages
                  src={
                    require("../../assets/images/Property 1=note.svg").default
                  }
                  alt="Image"
                />
              </ImageButtonTag>
              <TagNames>document</TagNames>
            </ListMain>

            <ListMain>
              <ImageButtonTag>
                <TagImages
                  src={
                    require("../../assets/images/Property 1=sign.svg").default
                  }
                  alt="Image"
                />
              </ImageButtonTag>
              <TagNames>Signed</TagNames>
            </ListMain>
          </ListMainItem>
          <Button>
            <LogoButton>Add Droplet</LogoButton>
            <ButtonLogo>
              <LogoButton>Add Droplet</LogoButton>
            </ButtonLogo>
          </Button>
        </LeftContainer>
      </SectionContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: #1b1c30;
  width: 15%;
`;

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
`;

const LeftContainer = styled.div`
  height: 100vh;
  background-color: #212236;
  /* width: 100%; */
`;

const TagContainer = styled.div`
  display: flex;
  width: 200px;
  padding-left: 20px;
`;

const TagName = styled.button`
  background-color: #84e9f4;
  margin-top: 30px;
  border-radius: 30%;
  width: 30px;
  height: 35px;
`;

const Heading = styled.h1`
  margin-left: 30px;
  font-size: px;
  color: #fff;
  font-weight: 400;
`;

const ListTagItem = styled.div`
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 55%;
  margin: 0 auto;
  @media all and (max-width: 1380px) {
    display: flex;
    padding-top: 7px;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 55%;
    margin: 0 auto;
  }
  @media all and (max-width: 768px){

}

`;

const LinkItems = styled(Link)``;

const ImageButton = styled.button`
  border-radius: 8px;
  margin-left: 11px;
  width: 40px;
  padding: 5px;
  background: #26273b;
  border-radius: 2px;
  border: none;
  display: block;
`;

const LinkImage = styled.img`
  width: 100%;
  display: block;
`;

const LinkName = styled(Link)`
  font-size: 10px;
  margin-left: 8px;
  color: #727488;
  display: inline-block;
  border: none;
  text-decoration: none;
`;

const ListMainItem = styled.div`
  padding-top: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 55%;
  margin: 0 auto;
`;

const ListMain = styled(Link)``;

const ImageButtonTag = styled.button`
  border-radius: 8px;
  margin-left: 11px;
  width: 40px;
  padding: 5px;
  background: #26273b;
  border-radius: 2px;
  border: none;
  display: block;
`;

const TagImages = styled.img`
  width: 100%;
  display: block;
`;

const TagNames = styled.p`
  font-size: 10px;
  margin-left: 8px;
  color: #727488;
  display: inline-block;
  text-decoration: none;
`;

const Button = styled.div`
  padding-top: 89px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 42px;
  align-items: center;
  text-decoration: none;
`;

const ButtonLogo = styled.div`
  padding-top: 15px;
  margin-right: 39px;
`;

const LogoButton = styled.button`
  padding: 11px 30px;
  border: 1px solid #000;
  border-radius: 18px;
  height: 38px;
  background-color: #f77958;
  cursor: pointer;
`;
