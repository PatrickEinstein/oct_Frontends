import { Link } from "react-router-dom";
// import { AiFillFacebook, AiFillLinkedin, AiOutlineTwitter, } from "react-icons/ai";
import OctaveLogo from "./../../assets/images/OctaveLogo.png";
const Footer = () => {
    return (<footer className="bg-gray-400 px-4 lg:px-16 pt-4">
      <div>
        <a href="/">
          <img src={OctaveLogo} alt="Octave Incorporations"/>
        </a>
      </div>
      <div className="flex justify-between px-16 my-8">
        <ul>
          <li className="text-primary text-lg font-bold">Company</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="">Affiliate</Link>
          </li>
        </ul>
        <ul>
          <li className="text-primary text-lg font-bold">Community</li>
          <li>
            <Link to="">Refer a Friend</Link>
          </li>
          <li>
            <Link to="">Octa Metaverse</Link>
          </li>
          <li>
            <Link to="">Octa coin</Link>
          </li>
          <li>
            <Link to="">Scholarship</Link>
          </li>
          <li>
            <Link to="/courses">Free Courses</Link>
          </li>
        </ul>
        <ul>
          <li className="text-primary text-lg font-bold">Tutoring</li>
          <li>
            <Link to="">Become a Tutor</Link>
          </li>
          <li>
            <Link to="">Tutor handbook</Link>
          </li>
          <li>
            <Link to="">Partnerships</Link>
          </li>
        </ul>
        <ul>
          <li className="text-primary text-lg font-bold">Support</li>
          <li>
            <Link to="">Support</Link>
          </li>
          <li>
            <Link to="">Contact Us</Link>
          </li>
          <li>
            <Link to="">Site Feedback</Link>
          </li>
          <li>
            <Link to="">Scholarships</Link>
          </li>
          <li>
            <Link to="">Free Courses</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-8 justify-center">
        <div className="mr-8">2023 OctaveInc. &copy; All Rights Reserved</div>
        <div className="flex gap-1 ml-8">
          {/* <a href="" target={"_blank"}>
            <AiOutlineTwitter />
          </a> */}
          {/* <a href="">
            <AiFillFacebook />
          </a> */}
          {/* <a href="">
            <AiFillLinkedin />
          </a> */}
          <a href=""></a>
        </div>
      </div>
    </footer>);
};
export default Footer;
