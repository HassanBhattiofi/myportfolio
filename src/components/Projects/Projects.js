import React from "react";
import { Fade } from "react-awesome-reveal";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <Fade delay={200}>
      <SectionTitle main>Projects</SectionTitle>
    </Fade>
    <Fade delay={100}>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <Fade delay={300}>
              <BlogCard key={i}>
                <Img src={p.image} />
                <TitleContent>
                  <HeaderThree title>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo className='card-info'>{p.description}</CardInfo>
                <div>
                  {/* <TitleContent>Stack</TitleContent> */}
                  <TagList>
                    {p.tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={p.visit} target='_blank'>
                    Live Review
                  </ExternalLinks>
                  {/* <ExternalLinks href={p.source}>Source</ExternalLinks> */}
                </UtilityList>
              </BlogCard>
            </Fade>
          );
        })}
      </GridContainer>
    </Fade>
  </Section>
);

export default Projects;
