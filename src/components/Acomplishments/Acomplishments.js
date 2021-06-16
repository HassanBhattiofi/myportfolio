import React from "react";
import { Fade } from "react-awesome-reveal";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 3, text: "ReactJs" },
  { number: 2, text: "NextJs" },
  { number: 5, text: "Javascript" },
  { number: 3, text: "NodeJs" },
  { number: 1, text: "Typescript" },
];

const Acomplishments = () => (
  <Section>
    <Fade delay={200}>
      <SectionTitle>Expriences</SectionTitle>
    </Fade>
    <Fade delay={200}>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Fade>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
