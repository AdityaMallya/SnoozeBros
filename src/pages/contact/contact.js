import "./contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Fab from "../../Images/facebook-icon.png";
import Inst from "../../Images/instagram.png";
import Twit from "../../Images/twitter.png";
import Load from "../../Images/loading.gif";

const Contact = () => {
  const form = useRef();
  const [loading, setLoader] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs
      .sendForm(
        "service_0a0ytla",
        "template_h5rxaws",
        form.current,
        "ngXT6A5hStucwftXX"
      )
      .then(
        (result) => {
          alert(result.text);
          form.current.reset();
          setLoader(false);
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact us for any queries</h1>
      <span className="contactDesc">
        You can contact us through the form below
      </span>
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
        ></input>
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
        ></input>
        <textarea
          className="msg"
          name="message"
          rows={5}
          placeholder="Enter Your query"
        ></textarea>
        {loading ? (
          <img src={Load} alt="load" className="loadImg" />
        ) : (
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
        )}
      </form>
      <div className="links">
        <button
          onClick={() =>
            window.open("https://www.facebook.com/aditya.mallya.7127", "_blank")
          }
          className="link"
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            padding: "0",
          }}
        >
          <img
            src={Fab}
            alt="Facebook Icon"
            style={{ width: "50px", height: "50px" }}
          />
        </button>

        <button
          onClick={() =>
            window.open("https://www.instagram.com/aditya_mallya__/", "_blank")
          }
          className="link"
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            padding: "0",
          }}
        >
          <img
            src={Inst}
            alt="Instagram Icon"
            style={{ width: "50px", height: "50px" }}
          />
        </button>

        <button
          onClick={() =>
            window.open(
              "https://www.instagram.comhttps://x.com/frrealidk",
              "_blank"
            )
          }
          className="link"
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            padding: "0",
          }}
        >
          <img
            src={Twit}
            alt="Twitter Icon"
            style={{ width: "50px", height: "50px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Contact;
