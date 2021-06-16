import Link from "next/link";
import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const customAnimation = keyframes`
  from {
    opacity: 100;
    transform: translate3d(-80px, -30px, 0);
  }

  to {
    opacity: 100;
    transform: translate3d(0, 0, 0);
  }
`;

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginLeft: "20px",
          }}
        >
          <Reveal keyframes={customAnimation}>
            <span>Hassan Bhatti</span>
          </Reveal>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Reveal keyframes={customAnimation} delay={300}>
          <Link href='#projects'>
            <NavLink>Projects</NavLink>
          </Link>
        </Reveal>
      </li>
      <li>
        <Reveal keyframes={customAnimation} delay={300}>
          <Link href='#tech'>
            <NavLink>Technologies</NavLink>
          </Link>
        </Reveal>
      </li>
      <li>
        <Reveal keyframes={customAnimation} delay={300}>
          <Link href='#about'>
            <NavLink>About</NavLink>
          </Link>
        </Reveal>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/HassanBhattiofi' target='_blank'>
        <Reveal keyframes={customAnimation} delay={300}>
          <AiFillGithub size='3rem' />
        </Reveal>
      </SocialIcons>
      <SocialIcons
        href='https://www.linkedin.com/in/hassanbhattiofi/'
        target='_blank'
      >
        <Reveal keyframes={customAnimation} delay={300}>
          <AiFillLinkedin size='3rem' />
        </Reveal>
      </SocialIcons>
      <SocialIcons href='https://twitter.com/hassanbhattiofi' target='_blank'>
        <Reveal keyframes={customAnimation} delay={300}>
          <AiFillTwitterCircle size='3rem' />
        </Reveal>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
