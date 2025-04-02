import React from "react";
import "./Skills.css";
export default function Skill({ skill, icon, width, id }) {
  return (
    <div className="html flex skill-name">
      <p>
        {skill} <span className={icon} />
      </p>
      <span className="skill-bar">
        <div className="skill-progress" style={{ width }} id={id}>
          {width}
        </div>
      </span>
    </div>
  );
}
