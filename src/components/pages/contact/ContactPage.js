import React, { useContext, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { themeContext } from "../../extra/Toggle/Context";
import { MdContactMail } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";

export const ContactPage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1j8x9xg",
        "template_1j8x9xg",
        form.current,
        "user_1j8x9xg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setDone(true);
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
      <div className="w-left container contact__container">
        <div className="awesome contact__options">
          {" "}
          {/* darkMode */}{" "}
          <article className="contact__option">
            <h4>
              {" "}
              <MdContactMail /> Email{" "}
            </h4>{" "}
            <h5> karkibishal00@gmail.com </h5>{" "}
            <a
              href="mailto:karkibishal00@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Leave a message <GrSend />{" "}
            </a>{" "}
          </article>{" "}
          <article className="contact__option">
            <h4>
              {" "}
              <ImWhatsapp /> Whatsapp{" "}
            </h4>{" "}
            <h5> +61433982572</h5>{" "}
            <a
              href="https://wa.me/61433982572"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Leave a message <GrSend />{" "}
            </a>{" "}
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
        <form ref={form} onSubmit={sendEmail} action="">
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            type="text"
            spellCheck="true"
          />
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
