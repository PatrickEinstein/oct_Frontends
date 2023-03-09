import React from "react";
import Section from "../layout/Section";
import Card from "./Card";

const CardSection = () => {
  return (
    <Section className="py-16">
      <div className="flex flex-wrap gap-4 justify-center my-4">
        <Card
          title="Training and Mentorship"
          type="primary"
          text="With the experienced tutors who will not only teach you
              practically, but who also metor you through"
        />
        <Card
          title="Internship Opportunities"
          type="secondary"
          text="Opportunity to be placed into an internship program where you get to use your skills in a team"
        />
        <Card
          title="Supportive Community"
          type="primary"
          text="Fun and interactive community of stacks from all over the world who are committed to helping each other grow"
        />
      </div>
    </Section>
  );
};

export default CardSection;
