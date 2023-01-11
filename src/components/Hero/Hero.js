import React from "react";

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
        <SectionTitle main center>
          Hello! I'm <br />
          Emmanuel Olusola
        </SectionTitle>
        <SectionText>
          A product driven software engineer, passionate about code quality,
          engineering principles and Software Infrastructure
        </SectionText>
        <Button onClick={props.handleClick}>
          <a
            href="https://docs.google.com/document/d/1DdSGBCh7OoICJd2YkSXvMoINsy4P_Lbe2QZUusFvzq4/edit"
            style={{ color: "white" }}
          >
            My resume
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
