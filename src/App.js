import HTM from "./image/htm.JPG";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Profile from "./components/Profile";

const Header = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  height: 15rem;
  width: 15rem;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: rgb(28 32 93 / 24%) 0px 2px 8px 0px;
`;
const Image = styled.img``;
const Name = styled.h1`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 1rem;
  padding: 0.3rem 0.6rem;
  border-radius: 1em;
  font-weight: bold;
  color: #fff;
  background-color: #000a;
  border: 1px solid #fffa;
`;
const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  position: relative;
  color: #fff;
  width:15%;
  background-color: #000a;
  border: 1px solid #fffa;
  padding: 0.2rem 0.4rem;
  :hover {
    background-color: #090a;
    transition: 0.5s ease-in-out;
  }
  :focus {
    background-color: #090a;
    color:#fff;
  }
`;
const Content = styled.div`
  margin:0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height:50vh;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  width:30%;
`
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fffa;
  border-radius: 7px;
  filter: blur(8px) saturate(260%) contrast(280%);
  box-shadow: rgb(28 32 93 / 24%) 0px 2px 8px 0px;
  z-index: -1;
`
function App() {
  const [page, setPage] = useState(0);
  useEffect(() => {
    document.title = "HTM profile";
  });
  return (
    <React.Fragment>
      <Header>
        <ImageContainer>
          <Image src={HTM} />
        </ImageContainer>
        <Name>Hsu Tang-Ming</Name>
      </Header>
      <ButtonContainer>
        <Button onClick={() => setPage(0)}>Profile</Button>
        <Button onClick={() => setPage(1)}>Contact</Button>
      </ButtonContainer>
      <Content>
        <Background />
        {page == 0 && <Profile />}
        {page == 1 && <div>0</div>}
      </Content>
    </React.Fragment>
  );
}

export default App;
