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
                src={
                  require("../../assets/images/Property 1=control.svg").default
                }
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
              <Down>
                <Name1>Storage</Name1>
                <Name2>+Add More</Name2>
              </Down>
            </ListItem>

            <ListItem>
              <FirstNumber>35/40 </FirstNumber>
              <Name12>GB</Name12>
              <Down>
                <Name1>Storage</Name1>
                <Name2>+Add More</Name2>
              </Down>
            </ListItem>
            <RightContent>
              <ButtonTags>
                <Title>Add Droplet</Title>
                <ButtonArrow>
                  <ButtonImage
                    src={
                      require("../../assets/images/Property 1=right w.svg")
                        .default
                    }
                    alt="image"
                  />
                </ButtonArrow>
              </ButtonTags>
            </RightContent>
          </Storage>
        </StorageSection>
        <GraphSection className="graph">
          <GraphLeft>
            <Graph>
              <GraphImage
                src={require("../../assets/images/graph.png")}
                alt="image"
              />
            </Graph>
            <ImageBares>
              <Recent>
                <Commit>Recently Commits</Commit>
              </Recent>
              <Items>
                <Leftitems>
                  <ImageBar>
                    <CatImage
                      src={
                        require("../../assets/images/Property 1=cat.svg")
                          .default
                      }
                      alt="image"
                    />
                  </ImageBar>
                  <MiddleBar>
                    <Code>dcf2b99</Code>
                    <Time>10 oct,10:23pm</Time>
                  </MiddleBar>
                </Leftitems>
                <MbTags>
                  <Mb>12MB</Mb>
                </MbTags>
              </Items>
              <Items>
                <Leftitems>
                  <ImageBar>
                    <CatImage
                      src={
                        require("../../assets/images/Property 1=cat.svg")
                          .default
                      }
                      alt="image"
                    />
                  </ImageBar>
                  <MiddleBar>
                    <Code>75075fa</Code>
                    <Time>10 oct,10:23pm</Time>
                  </MiddleBar>
                </Leftitems>
                <MbTags>
                  <Mb>12MB</Mb>
                </MbTags>
              </Items>
              <Items>
                <Leftitems>
                  <ImageBar>
                    <CatImage
                      src={
                        require("../../assets/images/Property 1=trash b.svg")
                          .default
                      }
                      alt="image"
                    />
                  </ImageBar>
                  <MiddleBar>
                    <Code>8936e01</Code>
                    <Time>10 oct,10:23pm</Time>
                  </MiddleBar>
                </Leftitems>
                <MbTags>
                  <Mb></Mb>
                </MbTags>
              </Items>

              <Items>
                <Leftitems>
                  <ImageBar>
                    <CatImage
                      src={
                        require("../../assets/images/Property 1=trash b.svg")
                          .default
                      }
                      alt="image"
                    />
                  </ImageBar>
                  <MiddleBar>
                    <Code>6d5ddel</Code>
                    <Time>10 oct,10:23pm</Time>
                  </MiddleBar>
                </Leftitems>
                <MbTags>
                  <Mb>12MB</Mb>
                </MbTags>
              </Items>
              <Items>
                <Leftitems>
                  <ImageBar>
                    <CatImage
                      src={
                        require("../../assets/images/Property 1=cat.svg")
                          .default
                      }
                      alt="image"
                    />
                  </ImageBar>
                  <MiddleBar>
                    <Code>ef65505</Code>
                    <Time>10 oct,10:23pm</Time>
                  </MiddleBar>
                </Leftitems>
                <MbTags>
                  <Mb>12MB</Mb>
                </MbTags>
              </Items>

              <Items>
                <Leftitems>
                  <ImageBar>
                    <CatImage
                      src={
                        require("../../assets/images/Property 1=trash b.svg")
                          .default
                      }
                      alt="image"
                    />
                  </ImageBar>
                  <MiddleBar>
                    <Code>67efafc</Code>
                    <Time>10 oct,10:23pm</Time>
                  </MiddleBar>
                </Leftitems>
                <MbTags>
                  <Mb>12MB</Mb>
                </MbTags>
              </Items>
            </ImageBares>
          </GraphLeft>
          <GraphRight>
            <BorderSection>
              <Droplet>
                <Lefts>
                  <DropName>Droplet 1</DropName>
                  <Time1>78.43%</Time1>
                  <Time2>2.35%</Time2>
                </Lefts>
                <TimeTag>
                  <TimeImage
                    src={require("../../assets/images/image4.png")}
                    alt="image"
                  />
                </TimeTag>
              </Droplet>
              <Droplet>
                <Lefts>
                  <DropName>Droplet 1</DropName>
                  <Time1>78.43%</Time1>
                  <Time2>2.35%</Time2>
                </Lefts>
                <TimeTag>
                  <TimeImage
                    src={require("../../assets/images/image2.png")}
                    alt="image"
                  />
                </TimeTag>
              </Droplet>
              <Droplet>
                <Lefts>
                  <DropName>Droplet 1</DropName>
                  <Time1>78.43%</Time1>
                  <Time2>2.35%</Time2>
                </Lefts>
                <TimeTag>
                  <TimeImage
                    src={require("../../assets/images/newmode.png")}
                    alt="image"
                  />
                </TimeTag>
              </Droplet>
              <Droplet>
                <Lefts>
                  <DropName>Droplet 1</DropName>
                  <Time1>78.43%</Time1>
                  <Time2>2.35%</Time2>
                </Lefts>
                <TimeTag>
                  <TimeImage
                    src={require("../../assets/images/image4.png")}
                    alt="image"
                  />
                </TimeTag>
              </Droplet>
            </BorderSection>
          </GraphRight>
        </GraphSection>
      </MiddleSection>

      <SideSec>
        <RightContainer>
          <BackGround>
            <OutLetSection>
              <HeadLine>Current Subscription plan</HeadLine>
              <TimeLine>$ 1325.00</TimeLine>
              <SubHeading>Company Plus</SubHeading>
              <ButtonLag>Change Plan</ButtonLag>
            </OutLetSection>
            <ImageBars>
              <SideImage
                src={require("../../assets/images/Frame 3466680.png")}
                alt="image"
              />
            </ImageBars>
          </BackGround>

          <Folders>
            <ButtonBar>
              <ImageBarr>
                <Bar1>
                  <Image1
                    src={
                      require("../../assets/images/Property 1=FILE B.svg")
                        .default
                    }
                    alt="image"
                  />
                </Bar1>
                <Bar2>
                  <Image2
                    src={
                      require("../../assets/images/Property 1=menu.svg").default
                    }
                    alt="image"
                  />
                </Bar2>
              </ImageBarr>
              <HeadName>Python</HeadName>
              <SubSection>
                <SubName>14 Projects</SubName>
                <SideName>24GB</SideName>
              </SubSection>
            </ButtonBar>

            <ButtonBar>
              <ImageBarr>
                <Bar1>
                  <Image1
                    src={
                      require("../../assets/images/Property 1=FILE O.svg")
                        .default
                    }
                    alt="image"
                  />
                </Bar1>
                <Bar2>
                  <Image2
                    src={
                      require("../../assets/images/Property 1=menu.svg").default
                    }
                    alt="image"
                  />
                </Bar2>
              </ImageBarr>
              <HeadName>PHP</HeadName>
              <SubSection>
                <SubName>21 Projects</SubName>
                <SideName>24GB</SideName>
              </SubSection>
            </ButtonBar>
            <ButtonBar>
              <ImageBarr>
                <Bar1>
                  <Image1
                    src={
                      require("../../assets/images/Property 1=FILE O.svg")
                        .default
                    }
                    alt="image"
                  />
                </Bar1>
                <Bar2>
                  <Image2
                    src={
                      require("../../assets/images/Property 1=menu.svg").default
                    }
                    alt="image"
                  />
                </Bar2>
              </ImageBarr>
              <HeadName>ASP</HeadName>
              <SubSection>
                <SubName>19 Projects</SubName>
                <SideName>24GB</SideName>
              </SubSection>
            </ButtonBar>
            <ButtonBar>
              <ImageBarr>
                <Bar1>
                  <Image1
                    src={
                      require("../../assets/images/Property 1=FILE O.svg")
                        .default
                    }
                    alt="image"
                  />
                </Bar1>
                <Bar2>
                  <Image2
                    src={
                      require("../../assets/images/Property 1=menu.svg").default
                    }
                    alt="image"
                  />
                </Bar2>
              </ImageBarr>
              <HeadName>RUBY</HeadName>
              <SubSection>
                <SubName>17 Projects</SubName>
                <SideName>24GB</SideName>
              </SubSection>
            </ButtonBar>
          </Folders>
        </RightContainer>
      </SideSec>
    </MainSection>
  );
}

export default Main;

const MainSection = styled.div`
  background-color: #1b1c30;
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
  background: #1b1c30;
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
  width: 55%;
  text-align: center;
  background-color: #1b1c30;
  margin-left: 40px;
`;
const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212236;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const LeftSection = styled.div`
  margin-top: 27px;
`;
const Head = styled.h1`
  font-size: 15px;
  font-weight: 100;
  color: #fff;
  margin-left: 22px;
  margin-top: -22px;
`;
const RightSection = styled.div`
  display: flex;
  width: 27%;
`;
const State = styled.div`
  width: 7%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
  margin: 13px auto;
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
  padding-top: 60px;
`;
const Storage = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -49px;
  margin-left: 32px;
  width: 92%;
`;
const ListItem = styled.div`
  position: relative;
`;
const FirstNumber = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  margin-right: 41px;
`;
const Name12 = styled.small`
  color: #727186;
  position: absolute;
  bottom: 66px;
  left: 75px;
`;
const Down = styled.div`
  width: 100%;
  margin-top: 4px;
  margin-bottom: 20px;
`;
const Name1 = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #c0c0c6;
`;
const Name2 = styled.span`
  font-size: 12px;
  font-weight: 100;
  margin-left: 12px;
  color: #595787;
`;
const RightContent = styled.div`
  margin-left: 10px;
`;
const ButtonTags = styled.div`
  background-color: #fb896b;
  height: 35px;
  width: 100%;
  display: flex;
  margin-right: 15px;
  cursor: pointer;
`;
const Title = styled.h1`
  font-size: 11px;
  margin-right: 10px;
  margin-left: 28px;
  margin-top: 10px;
  color: #fff;
`;

const ButtonArrow = styled.div`
  width: 14%;
  margin-top: 7px;
`;
const ButtonImage = styled.img`
  width: 100%;
  display: block;
`;

const GraphSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const GraphLeft = styled.div`
  width: 50%;
`;
const Graph = styled.div`
  width: 100%;
`;
const GraphImage = styled.img`
  width: 100%;
  display: block;
`;

const ImageBares = styled.div`
  width: 100%;
`;
const Items = styled.div`
  width: 65%;
  margin-bottom: 15px;
  display: flex;
  margin-left: 20px;
`;
const Recent = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
`;
const Commit = styled.h1`
  font-size: 10px;
  color: #d0cfd3;
  display: flex;
`;
const Leftitems = styled.div`
  width: 64%;
  display: flex;
`;
const ImageBar = styled.div`
  width: 32px;
  background-color: #252639;
`;
const CatImage = styled.img`
  width: 100%;
  display: block;
  height: 40px;
  border-radius: 20px;
`;
const MiddleBar = styled.div`
  width: 70%;
  /* margin-left: 10px; */
`;
const Code = styled.small`
  font-size: 10px;
  font-weight: 200;
  color: #36374b;
  /* display: contents; */
`;
const Time = styled.span`
  display: block;
  color: #464e6b;
  font-size: 10px;
`;
const MbTags = styled.div`
  margin-left: 50px;
`;
const Mb = styled.small`
  font-size: 12px;
  font-weight: 400;
  color: #505774;
`;

const GraphRight = styled.div`
  width: 50%;
`;
const BorderSection = styled.div``;
const Droplet = styled.div`
  display: flex;
  justify-content: space-between;
  background: 1px solid;
  background-color: #212236;
  padding-top: 10px;
`;
const Lefts = styled.div`
  width: 70%;
  margin-right: 30px;
`;
const DropName = styled.small`
  font-size: 20px;
  font-weight: 200;
  color: #67636f;
`;
const Time1 = styled.h2`
  font-size: 30px;
  margin-top: -1px;
  color: #fff;
`;
const Time2 = styled.small`
  font-size: 10px;
  color: #fb896b;
  margin-top: 10px;
`;
const TimeTag = styled.div`
  width: 90%;
  margin-left: 50px;
`;
const TimeImage = styled.img`
  width: 100%;
  display: block;
  border-bottom-right-radius: 20px;
`;

const SideSec = styled.div``;
const RightContainer = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  bottom: 0%;
  height: 80px;
  width: 25%;
`;
const BackGround = styled.div`
  background: #52459f;
  display: flex;
  width: 90%;
  border-radius: 30px;
  padding-left: 40px;
`;
const OutLetSection = styled.div`
  height: 187px;
  width: 100%;
  margin-left: -15px;
`;
const HeadLine = styled.h3`
  font-size: 9px;
  color: #fff;
`;
const TimeLine = styled.h6`
  font-size: 26px;
  color: #fff;
  margin-top: 22px;
`;
const SubHeading = styled.p`
  font-size: 15px;
  color: #fff;
  margin-top: -39px;
  /* padding-bottom: 6px; */
`;
const ButtonLag = styled.button`
  height: 17%;
  width: 56%;
  background-color: #fff;
  border-radius: 10px;
`;
const ImageBars = styled.div`
  height: 200px;
  width: 100%;
`;
const SideImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 25px;
`;
const Folders = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
`;
const ButtonBar = styled.div`
  width: 48%;
  height: 128px;
  background-color: #26273b;
  border: 5px;
  border-radius: 10%;
  margin-bottom: 20px;
`;
const ImageBarr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Bar1 = styled.div`
  width: 25%;
  margin-left: 4px;
`;
const Image1 = styled.img`
  width: 100%;
  display: block;
`;
const Bar2 = styled.div`
  width: 8%;
  margin-right: 7px;
`;
const Image2 = styled.img`
  width: 100%;
  display: block;
`;
const HeadName = styled.h6`
  font-size: 18px;
  text-align: start;
  margin-top: 5px;
  color: #fff;
  margin-left: 6px;
`;
const SubSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -26px;
`;
const SubName = styled.small`
  font-size: 12px;
  color: #727488;
  margin-left: 9px;
  margin-top: -10px;
`;
const SideName = styled.small`
  font-size: 12px;
  color: #727488;
  margin-right: 10px;
  margin-bottom: 3px;
`;
