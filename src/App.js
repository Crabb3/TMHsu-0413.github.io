import HTM from "./image/htm.JPG";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import { keyframes } from "styled-components";

const appearblur = keyframes`
  0% {
    opacity: 0;
    filter: blur(10px);
  }
  100%{
    opacity: 1;
    filter:blur(0);
  }
`;
const appearfromtop = keyframes`
  0%{
    opacity: 0;
    height: 0;
  }
  100%{
    opacity: 1;
    height: 43vh;
  }
`;
const Header = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearblur} 2s ease-in;

`;
const Vanta = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
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
  opacity: 0;
  justify-content: center;
  align-items: center;
  animation: ${appearblur} .5s linear 2s forwards;
`;
const Button = styled.button`
  position: relative;
  color: #fff;
  min-width:150px;
  width: 15%;
  border-radius: 4px;
  background-color: #000a;
  border: 1px solid #fffa;
  box-shadow: inset 0 0 0 0 #090a;
  transition: ease-out 0.5s;
  padding: 0.2rem 0.4rem;
  :hover {
    box-shadow: inset 300px 0 0 0 #090a;
  }
`;
const Content = styled.div`
  margin: 0 auto;
  opacity: 0;
  height:40vh;
  position: relative;
  display: flex;
  border: 1px solid #fffa;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  min-width: 300px;
  width:30%;
  animation: ${appearfromtop} .5s ease-in-out 2.5s forwards;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000a;
  border-radius: 7px;
  filter: blur(8px) saturate(260%) contrast(280%);
  box-shadow: rgb(28 32 93 / 24%) 0px 2px 8px 0px;
  z-index: -1;
`;
function App() {
  const [page, setPage] = useState(0);
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    document.title = "TMHsu website";
  });
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x3c77c3,
          birdSize: 1.2,
          wingSpan: 18.0,
          speedLimit: 6.0,
          separation: 17.0,
          quantity: 2.0,
          backgroundAlpha: 0.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <React.Fragment>
      <Vanta ref={myRef}></Vanta>
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
        {page == 1 && <Contact />}
      </Content>
    </React.Fragment>
  );
}

export default App;
