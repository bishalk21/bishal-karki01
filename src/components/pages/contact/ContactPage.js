import React, { useContext, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { themeContext } from "../../extra/Toggle/Context";
import { MdContactMail } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "react-scroll";

export const ContactPage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="contact-form"
      id=""
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {" "}
      {/* <h5> Get In Touch </h5> <h2> Contact Me </h2> */}{" "}
      {/* <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
                <span>Contact me</span> */}{" "}
      {/* left side copy and paste from work section */}{" "}
      <div className="w-left container contact__container">
        <div className="awesome contact__options">
          {" "}
          {/* darkMode */}{" "}
          <article className="contact__option">
            <MdContactMail />
            <h4> Email </h4> <h5> karkibishal00@gmail.com </h5>{" "}
            <Link
              to="mailto:karkibishal00@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Leave a message <GrSend />{" "}
            </Link>{" "}
          </article>{" "}
          <article className="contact__option">
            <ImWhatsapp />
            <h4> Whatsapp </h4> <h5> +61433982572</h5>{" "}
            <Link
              to="https://wa.me/61433982572"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Leave a message <GrSend />{" "}
            </Link>{" "}
          </article>{" "}
          <div
            className="blur s-blur1"
            style={{
              background: "#ABF1FF94",
            }}
          ></div>{" "}
        </div>{" "}
      </div>{" "}
      {/* right side form */}{" "}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span> {done && "Thanks for Contacting me"} </span>{" "}
          <div
            className="blur c-blur1"
            style={{
              background: "var(--purple)",
            }}
          ></div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};
