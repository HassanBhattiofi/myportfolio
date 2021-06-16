import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <Fade delay={200}>
            <LinkTitle>Email</LinkTitle>
          </Fade>
          <Fade delay={200}>
            <LinkItem href='mailto:hassanbhattiofi@gmail.com'>
              HassanBhattiOfi@gmail.com
            </LinkItem>
          </Fade>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Fade delay={200}>
            <Slogan>Innovating one project at a time</Slogan>
          </Fade>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href='https://github.com/HassanBhattiofi'
            target='_blank'
          >
            <Fade delay={200}>
              <AiFillGithub size='3rem' />
            </Fade>
          </SocialIcons>
          <SocialIcons
            href='https://www.linkedin.com/in/hassanbhattiofi/'
            target='_blank'
          >
            <Fade delay={200}>
              <AiFillLinkedin size='3rem' />
            </Fade>
          </SocialIcons>
          <SocialIcons href='https://twitter.com/hassanbhattiofi' target='_blank'>
        <Fade delay={200}>
          <AiFillTwitterCircle size='3rem' />
        </Fade>
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
