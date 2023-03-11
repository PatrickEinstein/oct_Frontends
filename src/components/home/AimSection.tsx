import React from "react";
import Section from "../layout/Section";
import AimContainer from "./AimContainer";
import AimImage1 from "./../../assets/images/AimImage1.png";
import AimImage2 from "./../../assets/images/AimImage2.png";
import AimImage3 from "./../../assets/images/AimImage3.png";
const AimSection = () => {
  return (
    <Section className="py-16">
      <div className="flex flex-wrap gap-8 justify-center my-4 items-center">
        <AimContainer
          image={AimImage1}
          title={"Octave Digital University"}
          text={
            "This is dedicated to empowering the next generation of tech entrepreneurs, providing them with skills and knowledge they need to succeed in the digital world"
          }
        />
        <AimContainer
          image={AimImage2}
          title={"Unleashing the tech entrepreneurs of tomorrow"}
          text={
            "This is dedicated to empowering the next generation of tech entrepreneurs, providing them with skills and knowledge they need to succeed in the digital world"
          }
        />
        <AimContainer
          image={AimImage3}
          title={"Scale your business with AI"}
          text={
            "Melody AI is an MLOps platform that will help you scale your business to new heights with AI-powered solutions"
          }
        />
      </div>
    </Section>
  );
};

export default AimSection;
