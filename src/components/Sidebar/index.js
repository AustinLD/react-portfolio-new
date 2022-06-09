import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoA from "../../assets/images/logo-a.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => (
  <>
    <div className="nav-bar">
      <Link className="logo" to="/react-portfolio">
        <img src={LogoA} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/react-portfolio">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          className="about-link"
          exact="true"
          activeclassname="active"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          className="contact-link"
          exact="true"
          activeclassname="active"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/austin-donovan-b39151102/">
            <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/AustinLD">
            <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  </>
);

export default Sidebar;
