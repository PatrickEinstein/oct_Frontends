import React from "react";
import Button from "../layout/Button";
import Section from "../layout/Section";
import SupportContainer from "./SupportContainer";

const SupportSection = () => {
  return (
    <Section className="bg-primary text-white">
      <SupportContainer
        title="Be an Octavian today"
        text="Join a community of tech talents who are solving complex problems in
          Africa, thereby advancing digitalization and transforming lives"
        buttonText="Join Now"
      />
      <SupportContainer
        title="Connect to Limitless opportunities"
        text="Octave talents help connect skilled tech professionals to top-paying hobs and lucrative clients, enabling them to reach their full potential and drive their careers forward"
        buttonText="Connect Now"
      />
      <SupportContainer
        title="Learn With the best experience"
        text="Choose from our courses uniquely designed to help build
              value-adding skills and enroll for free virtual internships that
              will help you gain real work experience. <br />
              (Bootcamps, Self-paced courses, Projects, Virtual Internships)"
        buttonText="Learn Now"
      />
    </Section>
  );
};

export default SupportSection;
