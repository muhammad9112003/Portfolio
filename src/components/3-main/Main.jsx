import React, { useState } from "react";
import "./Main.css";
import { AnimatePresence, motion } from "motion/react";

export default function Main() {
  const myProjects = [
    ,
    {
      index: "0",
      title: "leon design",
      category: "HTML && CSS",
      discription:
        "A simple HTML application demonstrating basic concepts like Grid, Flexbox, gradient colors, and responsive design for all screen sizes",
      image: "./card1.png",
      link: "https://muhammad9112003.github.io/leon/",
      gitHub: "https://github.com/muhammad9112003/leon",
    },
    {
      index: "1",
      title: "Basic E-Commerce",
      category: "React.js",
      discription:
        "A simple application based on the idea of creating an e-commerce and linking APIs to the project and routing. The focus was on the logic, not the design",
      image: "./card2.png",
      link: "https://eco911.surge.sh/",
      gitHub: "https://github.com/muhammad9112003/Basic-E-Commerce",
    },
    {
      index: "2",
      title: "Coffe shop",
      category: "Bootstrap",
      discription:
        "This is a simple coffee shop website built with Bootstrap to ensure a responsive and user-friendly experience. The site includes an attractive homepage, a menu page, and a contact page, making it easy for customers to browse information and get in touch with the cafe`",
      image: "./card3.png",
      link: "https://muhammad9112003.github.io/Cafe-/",
      gitHub: "https://github.com/muhammad9112003/Cafe-",
    },
    {
      index: "3",
      title: "CRUDS System",
      category: "Js",
      discription:
        "Practical application of the logic of creating , reading, updating ,deleting and searching in JavaScript ..... These operations are essential in application development for efficient data management in websites and systems",
      image: "./card4.png",
      link: "https://muhammad9112003.github.io/Simple-CRUDS-System/",
      gitHub: "https://github.com/muhammad9112003/Simple-CRUDS-System",
    },
  ];
  let [on, setOn] = useState("on1");
  const [p, setP] = useState(myProjects);
  return (
    <main id="projects">
      <section className="btns">
        <button
          onClick={() => {
            setOn("on1");
            setP(myProjects);
          }}
          className={on === "on1" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            setOn("on2");
            let newP = myProjects.filter((p) => {
              return p.category === "HTML && CSS";
            });
            setP(newP);
          }}
          className={on === "on2" ? "active" : null}
        >
          HTML && CSS
        </button>
        <button
          onClick={() => {
            setOn("on3");
            let newP = myProjects.filter((p) => {
              return p.category === "Bootstrap";
            });
            setP(newP);
          }}
          className={on === "on3" ? "active" : null}
        >
          bootstrap
        </button>
        <button
          onClick={() => {
            setOn("on4");
            let newP = myProjects.filter((p) => {
              return p.category === "Js";
            });
            setP(newP);
          }}
          className={on === "on4" ? "active" : null}
        >
          Java script
        </button>
        <button
          onClick={() => {
            setOn("on5");
            let newP = myProjects.filter((p) => {
              return p.category === "React.js";
            });
            setP(newP);
          }}
          className={on === "on5" ? "active" : null}
        >
          react.js
        </button>
      </section>

      <motion.div
        layout
        transition={{ type: "spring", damping: 8, stiffness: 50 }}
        className="cards"
      >
        <AnimatePresence>
          {p.map((project) => {
            return (
              <div className="card" key={project.index}>
                <img src={project.image} alt="no logo" />
                <div className="content">
                  <h2 className="title">{project.title}</h2>
                  <p>{project.discription}</p>
                  <div className="links">
                    <div className="code">
                      <a href={project.link} target="_blank">
                        <div className="icon-link" />
                      </a>

                      <a href={project.gitHub} target="_blank">
                        <div className="icon-github" />
                      </a>
                    </div>
                    <button className="icon-heart" />
                  </div>
                </div>
              </div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
