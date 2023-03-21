import Section from "../layout/Section";
import SupportContainer from "./SupportContainer";
import SupportImage1 from "./../../assets/images/SupportImage1.png";
import SupportImage2 from "./../../assets/images/SupportImage2.png";
import SupportImage3 from "./../../assets/images/SupportImage3.png";
const SupportSection = () => {
    return (<Section className="bg-primary text-white">
      <SupportContainer title="Be an Octavian today" text="Join a community of tech talents who are solving complex problems in
          Africa, thereby advancing digitalization and transforming lives" buttonText="Join Now" image={SupportImage1}/>
      <SupportContainer title="Connect to Limitless opportunities" text="Octave talents help connect skilled tech professionals to top-paying hobs and lucrative clients, enabling them to reach their full potential and drive their careers forward" buttonText="Connect Now" image={SupportImage2}/>
      <SupportContainer title="Learn With the best experience" text="Choose from our courses uniquely designed to help build
              value-adding skills and enroll for free virtual internships that
              will help you gain real work experience. <br />
              (Bootcamps, Self-paced courses, Projects, Virtual Internships)" buttonText="Learn Now" image={SupportImage3}/>
    </Section>);
};
export default SupportSection;
