import React, { useEffect, useState } from "react";
import "./Contact.css";
import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";
import done from "../../../public/animation/done.json";
import mail from "../../../public/animation/mail.json";
export default function Contact() {
  const [state, handleSubmit] = useForm("xkgjgqrb");
  const [formstate, setFormState] = useState({ succeeded: false });

  useEffect(() => {
    if (state.succeeded) {
      // @ts-ignore
      document.getElementById("form").reset();
    }
  }, [state.succeeded]);
  return (
    <section className="contact" id="contact">
      <h1 className="title">
        <span className="icon-envelope" />
        contact me
      </h1>
      <p>
        Write me a message that brings joy to my heart every time I read it and
        remains a beautiful memory
      </p>
      <div className="form">
        <form action="" onSubmit={handleSubmit} id="form">
          <div className="email">
            <label htmlFor="email"> your e-Mail:</label>
            <input
              type="email"
              id="email"
              required
              name="email"
              autoComplete="off"
              title="Enter Your E-Mail"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="message">
            <label htmlFor="message">your message:</label>
            <textarea
              id="message"
              required
              name="message"
              title="PLZ Give Me Your Opinion "
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            value="send"
            className="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "submitting...." : "submit"}
          </button>
          {state.succeeded ? (
            <p
              className="done"
              style={{
                textAlign: "center",
                width: "100%",
                marginTop: "1rem",
                fontWeight: "700",
                fontSize: "1.4rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "0px",
              }}
            >
              <Lottie
                style={{
                  height: "80px",
                  width: "60px",
                  margin: "0",
                  marginRight: "-15px",
                }}
                loop={false}
                animationData={done}
              />
              your message has been sent successfully🤙🏻
            </p>
          ) : null}
        </form>
        <div className="animation">
          <Lottie animationData={mail} className="mailIcon" />
        </div>
      </div>
    </section>
  );
}
