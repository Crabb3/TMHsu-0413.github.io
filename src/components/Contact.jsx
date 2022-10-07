import React from "react";
import styled, { keyframes } from "styled-components";
import fb_svg from "../image/fb.svg";
import gmail_svg from '../image/gmail.svg'
import github_svg from '../image/github.svg'
import leetcode_svg from '../image/leetcode.svg'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1rem;
  width: 100%;
  height: 100%;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 300px;
  gap:.5em;
`;

const Topleft = styled.div`
    flex:0;
    &:before,&:after{
        content: '';
        position: absolute;
        top:0;
        left:0;
        width:0%;
        height: 0%;
        background: #fffa;
    }
`
const BottomRight = styled.div`
    flex:0;
    &:before,&:after{
        content: '';
        position: absolute;
        bottom:0;
        width:0%;
        height: 0%;
        right:0;
        background: #fffa;
    }
`
const Link = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  color: #fff;
  &:hover{
      ${Topleft}::before,${BottomRight}::before{
          width:100%;
          height: 2px;
          transition: all .5s linear;
      }
      ${Topleft}::after,${BottomRight}::after{
          height: 100%;
          width: 2px;
          transition: all .5s linear;
      }
  }
`;
const Image = styled.img`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: .5rem;
`;
const Contact = () => {
  return (
    <Content>
      <Button>
        <Link href="https://www.facebook.com/profile.php?id=100008041262760">
          <Topleft></Topleft>
          <BottomRight></BottomRight>
          <Image src={fb_svg} alt="fb" />
          Facebook
        </Link>
      </Button>
      <Button>
        <Link href="mailto:denny890413@gmail.com">
          <Topleft></Topleft>
          <BottomRight></BottomRight>
          <Image src={gmail_svg} alt="Gmail" />
          Gmail
        </Link>
      </Button>
      <Button>
        <Link href="https://github.com/TMHsu-0413">
          <Topleft></Topleft>
          <BottomRight></BottomRight>
          <Image src={github_svg} alt="github" />
          GitHub
        </Link>
      </Button>
      <Button>
        <Link href="https://leetcode.com/TMHsu/">
          <Topleft></Topleft>
          <BottomRight></BottomRight>
          <Image src={leetcode_svg} alt="leetcode" />
          LeetCode
        </Link>
      </Button>
    </Content>
  );
};

export default Contact;
