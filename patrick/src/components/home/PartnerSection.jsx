import React from "react";
import Section from "../layout/Section";
import Partner1 from "./../../assets/images/Partner1.png";
import Partner2 from "./../../assets/images/Partner2.png";
import Partner3 from "./../../assets/images/Partner3.png";
const PartnerSection = () => {
    return (<Section className="py-16">
      <div className="text-center">
        <h3 className="text-3xl font-bold">Partners and Trusted by</h3>
        <div className="flex flex-wrap gap-8 justify-center my-4 items-center">
          <figure>
            <img src={Partner1} alt={"Omedana"}/>
            <figcaption className="text-lg my-2">Omedana</figcaption>
          </figure>
          <figure>
            <img src={Partner2} alt={"Metroeyes"}/>
            <figcaption className="text-lg my-2">Metroeyes</figcaption>
          </figure>
          <figure>
            <img src={Partner3} alt={"Nitda Unilag"}/>
            <figcaption className="text-lg my-2">Nitda Unilag</figcaption>
          </figure>
        </div>
      </div>
    </Section>);
};
export default PartnerSection;
