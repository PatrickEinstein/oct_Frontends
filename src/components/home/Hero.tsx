import React from "react";
import Section from "../layout/Section";

const Hero = () => {
  return (
    <Section>
      <div className="flex items-center gap-4 h-96">
        <div className="flex-1">
          <h3 className="text-primary text-2xl my-4 font-bold font-rubik">
            Empowering the future of Africa
          </h3>
          <p className="text-xl font-openSans">
            Octave Incorporations is on a mission to advance digitalization in
            Nigeria and Africa at large
            <br />
            <br />
            <button className="bg-primary text-white font-semibold flex p-0 px-4 py-2 rounded-sm">
              Learn More
            </button>
          </p>
        </div>
        <div className="hidden lg:block lg:flex-1">some</div>
      </div>
    </Section>
  );
};

export default Hero;
