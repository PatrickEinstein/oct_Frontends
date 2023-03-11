import React from "react";
import Section from "../layout/Section";
import ComingSoon1 from "./../../assets/images/ComingSoon1.png";
import ComingSoon2 from "./../../assets/images/ComingSoon2.png";

const ComingSoon = () => {
  return (
    <Section>
      <h3 className="text-3xl font-bold my-4 text-center">Coming Soon...</h3>
      <div className="flex flex-wrap gap-8 justify-center my-4 items-center text-center">
        <figure className="mx-4">
          <img src={ComingSoon1} alt="Octa Metaverse" />
          <figcaption>
            <h3 className="text-lg">Octa Metaverse</h3>
          </figcaption>
        </figure>
        <figure className="mx-4">
          <img src={ComingSoon2} alt="" />
          <figcaption>
            <h3 className="text-lg">Octacoin</h3>
          </figcaption>
        </figure>
      </div>
    </Section>
  );
};

export default ComingSoon;
