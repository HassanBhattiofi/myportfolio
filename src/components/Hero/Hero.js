import React from "react";
import { Fade } from "react-awesome-reveal";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <Fade delay={100}>
          <SectionTitle main center>
            Welcome To <br />
            My Portfolio ❤️
          </SectionTitle>
        </Fade>
        <Fade delay={300}>
          <SectionText>
            I'm full-stack developer, i developed lot of complex features &
            created amazing projects in era of my web development journey.
          </SectionText>
        </Fade>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
