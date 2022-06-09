import LogoTitle from"../../assets/images/logo-a.png"
import { Link } from "react-router-dom"
import "./index.scss";
import Layout from "../Layout";

const Home = () => {
  return (
    <>
    <Layout />
      <div className="container home-page">
        <div className="text-zone">
          <h1>Hey, <br /> I'm
          <img src={LogoTitle} alt="Name" />
          ustin.
          <br />
          Javascript Developer
          </h1>
          <h2>frontend / backend MERN stack techonogies</h2>
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
      </div>
    </>
  )
}

export default Home
