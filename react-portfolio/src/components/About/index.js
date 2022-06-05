import "./index.scss";
import Layout from "../Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faGitAlt, faHtml5, faJs, faReact, faWindows } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
    <Layout />
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          About Me
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ipsum fringilla, auctor erat eget, cursus enim. Donec iaculis vel lorem at maximus. Duis varius facilisis rhoncus. Integer ornare fermentum tortor eu bibendum. Proin mauris ipsum, suscipit id cursus id, convallis vel leo. In hac habitasse platea dictumst. Praesent </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ipsum fringilla, auctor erat eget, cursus enim. Donec iaculis vel lorem at maximus. Duis varius . Ut id egestas quam. Duis volutpat molestie enim et faucibus. Nulla non turpis lacinia, tempus odio venenatis, dapibus nibh.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ipsum fringilla, auctor erat eget, cursus enim. Donec iaculis vel lorem at maximus. Duis varius  estas quam. Duis volutpat molestie enim et faucibus. Nulla non turpis lacinia, tempus odio venenatis, dapibus nibh.</p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} />
          </div>

          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} />
          </div>

          <div className="face3">
            <FontAwesomeIcon icon={faCss3} />
          </div>

          <div className="face4">
            <FontAwesomeIcon icon={faJs} />
          </div>

          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} />
          </div>

          <div className="face6">
            <FontAwesomeIcon icon={faWindows} />
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default About