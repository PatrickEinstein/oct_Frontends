import { Link } from "react-router-dom";
import {} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-gray-400 px-4 lg:px-16">
      <div>Octave Logo</div>
      <div className="flex justify-between px-16 my-8">
        <ul>
          <li className="text-primary">Company</li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Careers</Link>
          </li>
          <li>
            <Link to="">Blogs</Link>
          </li>
          <li>
            <Link to="">Affiliate</Link>
          </li>
        </ul>
        <ul>
          <li className="text-primary">Community</li>
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
            <Link to="">Free Courses</Link>
          </li>
        </ul>
        <ul>
          <li className="text-primary">Tutoring</li>
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
          <li className="text-primary">Support</li>
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
      <div>
        <div>2023 OctaveInc. &copy; All Rights Reserved</div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
