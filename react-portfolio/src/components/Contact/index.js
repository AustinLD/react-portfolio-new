import "./index.scss";
import Layout from "../Layout";

const Contact = () => {
  return (
    <>
      <Layout />
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
            ipsum fringilla, auctor erat eget, cursus enim. Donec iaculis vel
            lorem at maximus. Duis varius facilisis rhoncus. Integer ornare
            fermentum tortor eu bibendum. Proin mauris ips Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Fusce eget ipsum fringilla,
            auctor erat eget, cursus enim. Donec iaculis vel lorem at maximus.
            Duis varius facilisis rhoncus. Integer ornare fermentum tortor eu
            bibendum. Proin mauris ipsum, suscipit id cursus id, convallis vel
            leo. In hac habitasse platea dictumst. Praesent um, suscipit id
            cursus id, convallis vel leo. In hac habitasse platea dictumst.
            Praesent{" "}
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="text"
                    name="Email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    required
                  />
                </li>

                <li>
                  <textarea placeholder="Message" />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
