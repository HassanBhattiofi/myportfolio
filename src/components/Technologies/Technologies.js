import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { Fade } from "react-awesome-reveal";

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <Fade delay={200}>
      <SectionTitle>Technologies</SectionTitle>
    </Fade>
    <Fade delay={200}>
      <SectionText>
        I've worked with a range a technologies in the web development world.
        From Back-end To Design
      </SectionText>
    </Fade>
    <List>
      <ListItem>
        <picture>
          <Fade delay={200}>
            <DiReact size='3rem' />
          </Fade>
        </picture>
        <ListContainer>
          <Fade delay={200}>
            <ListTitle>Front-End</ListTitle>
          </Fade>
          <Fade delay={200}>
            <ListParagraph>
              Experiece with <br />
              React.js
            </ListParagraph>
          </Fade>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <Fade delay={200}>
            <DiFirebase size='3rem' />
          </Fade>
        </picture>
        <ListContainer>
          <Fade delay={200}>
            <ListTitle>Back-End</ListTitle>
          </Fade>
          <Fade delay={200}>
            <ListParagraph>
              Experience with <br />
              Node and Databases
            </ListParagraph>
          </Fade>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <Fade delay={200}>
            <DiZend size='3rem' />
          </Fade>
        </picture>
        <ListContainer>
          <Fade delay={200}>
            <ListTitle>UI/UX</ListTitle>
          </Fade>
          <Fade delay={200}>
            <ListParagraph>
              Experience with <br />
              tools like Figma
            </ListParagraph>
          </Fade>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
