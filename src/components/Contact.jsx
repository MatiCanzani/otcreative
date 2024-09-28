import { useState } from "react";
import "./styles.scss";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = () => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <section id="contact">
      <h2> Interested in working with us? </h2>
      <h2> Get in touch!</h2>
      <div className="section-contact h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success/"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <div className="form-cntr">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <input
                type="text"
                name="name"
                placeholder="your name*"
                onChange={handleChange}
              />
            </p>
          </div>
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <div className="form-cntr">
            <p>
              <input
                type="email"
                name="email"
                placeholder="your email*"
                onChange={handleChange}
              />
            </p>
          </div>
          <div className="form-cntr">
            <p>
              <textarea
                name="message"
                placeholder="your message"
                onChange={handleChange}
                rows="4" cols="50"
              ></textarea>
            </p>
          </div>
          <div className="button-cntr">
            <button className="send-button" type="submit">
              CONTACT US
            </button>
          </div>
        </form>
        {/* <div className="contact-info">
          <h3>Locations</h3>
          <div>
            <h4>BUENOS AIRES</h4>
            <h4>BOSTON</h4>
            <h4>UK</h4>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
