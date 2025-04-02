import React from "react";
import dev from "../../../public/animation/dev.json";
import "./Hero.css";
import Lottie from "lottie-react";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="article">
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ damping: 12, type: "spring", stiffness: 40 }}
          className="image"
        >
          <img src="./me.png" alt="photo" />
        </motion.div>
        <div className="name">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            muhammad ayman <span className="icon-verified" />
          </motion.h1>
        </div>
        <h2 className="title">front-end developer</h2>
        <p className="hint">
          studied at the Faculty of Computer Science and Data Science in
          Alexandria. I have two years of experience in the front-end.
        </p>
        <div className="links">
          <a
            className="icon-github"
            target="_blank"
            href="https://github.com/muhammad9112003"
            style={{ color: "red" }}
          />
          <a
            className="icon-linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/muhammad-ayman-5a87ba314"
          />
          <a
            className="icon-facebook"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100092267151574"
          />
          <a
            className="icon-gmail"
            target="_blank"
            href="mailto:moayman9112003@gmail.com"
          />
          <a
            className="icon-whatsapp"
            target="_blank"
            href="https://wa.me/201274870642"
          />
        </div>
      </div>
      <div className="animation">
        <Lottie animationData={dev} className="mailIcon" />
      </div>
    </section>
  );
}
