import React from "react";
import Section from "../layout/Section";
import EventPic1 from "./../../assets/images/EventPic1.png";
import EventPic2 from "./../../assets/images/EventPic2.png";
import EventPic3 from "./../../assets/images/EventPic3.png";
const EventPicturesSection = () => {
    return (<Section className="py-16">
      <h3 className="text-3xl font-bold text-center my-4">
        Pictures from some of our Events
      </h3>
      <div className="flex flex-wrap gap-8 justify-center my-4 items-center">
        <figure>
          <img src={EventPic1} alt=""/>
        </figure>
        <figure>
          <img src={EventPic2} alt=""/>
        </figure>
        <figure>
          <img src={EventPic3} alt=""/>
        </figure>
      </div>
    </Section>);
};
export default EventPicturesSection;
