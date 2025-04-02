import React from "react";
import Skill from "./Skill";
import Lottie from "lottie-react";
import skillAnimation from "../../../public/animation/skills.json";

const DatsSkills = [
  { skill: "HTML", width: "90%", icon: "icon-html5", id: "skill1" },
  { skill: "CSS", width: "85%", icon: "icon-css3", id: "skill2" },
  {
    skill: "BootStrap",
    width: "70%",
    icon: "icon-bootstrap",
    id: "skill3",
  },
  {
    skill: "Java Script",
    width: "80%",
    icon: "icon-javascript",
    id: "skill4",
  },
  { skill: "React.JS", width: "60%", icon: "icon-react", id: "skill5" },
];
export default function Skills() {
  return (
    <section id="skills" className="skills">
      {DatsSkills.map((sk) => {
        return (
          <Skill
            key={sk.skill}
            skill={sk.skill}
            width={sk.width}
            icon={sk.icon}
            id={sk.id}
          />
        );
      })}

      <Lottie
        animationData={skillAnimation}
        style={{ width: "80%", height: "300px", margin: "2px auto" }}
      />
    </section>
  );
}
