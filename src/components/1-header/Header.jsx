import { useState } from "react";
import "./Header.css";
import { useEffect } from "react";
export default function Header() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentmode") ?? "darkMode"
  );
  const [showScroll, setShowScroll] = useState(false);
  const [icon, setSIcon] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  useEffect(() => {
    document.body.classList.add(mode);
    if (mode === "darkMode") {
      setSIcon("icon-moon-o");
    } else {
      setSIcon("icon-sun");
    }
  }, [mode]);

  const [showModel, setShowModel] = useState(false);
  const [skills, setSkills] = useState(true);
  return (
    <header>
      <button
        className="menu icon-th-menu-outline"
        onClick={() => {
          setShowModel(true);
        }}
      />

      <div />
      <nav>
        <ul>
          <li>
            <a href="#about">about me</a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => {
                if (skills == true) {
                  document.getElementById("skill1").classList.add("animi");
                  document.getElementById("skill2").classList.add("animi");
                  document.getElementById("skill3").classList.add("animi");
                  document.getElementById("skill4").classList.add("animi");
                  document.getElementById("skill5").classList.add("animi");
                  setSkills(false);
                } else {
                  document.getElementById("skill1").classList.toggle("animi");
                  document.getElementById("skill2").classList.toggle("animi");
                  document.getElementById("skill3").classList.toggle("animi");
                  document.getElementById("skill4").classList.toggle("animi");
                  document.getElementById("skill5").classList.toggle("animi");
                }
              }}
            >
              skills
            </a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
      <button
        className={`mode ${icon}`}
        onClick={() => {
          const newMode = mode === "darkMode" ? "lightMode" : "darkMode";
          setMode(newMode);
          localStorage.setItem("currentmode", newMode);
          document.body.classList.remove(mode);
          document.body.classList.add(newMode);
          if (newMode === "lightMode") {
            document.querySelector(".mode").classList.add("icon-sun");
            document.querySelector(".mode").classList.remove("icon-moon-o");
          } else {
            document.querySelector(".mode").classList.add("icon-moon-o");
            document.querySelector(".mode").classList.remove("icon-sun");
          }
        }}
      />

      {showModel && (
        <div className="popUp">
          <ul className="model">
            <li>
              <button
                className="icon-cancel cancel"
                onClick={() => {
                  setShowModel(false);
                }}
              />
            </li>
            <li>
              <a href="#about">about me</a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => {
                  if (skills == true) {
                    document.getElementById("skill1").classList.add("animi");
                    document.getElementById("skill2").classList.add("animi");
                    document.getElementById("skill3").classList.add("animi");
                    document.getElementById("skill4").classList.add("animi");
                    document.getElementById("skill5").classList.add("animi");
                    setSkills(false);
                  } else {
                    document.getElementById("skill1").classList.toggle("animi");
                    document.getElementById("skill2").classList.toggle("animi");
                    document.getElementById("skill3").classList.toggle("animi");
                    document.getElementById("skill4").classList.toggle("animi");
                    document.getElementById("skill5").classList.toggle("animi");
                  }
                }}
              >
                skills
              </a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact me</a>
            </li>
          </ul>
        </div>
      )}
      <button
        className="icon-arrow-up scrollTop"
        style={{ opacity: showScroll ? 1 : 0, transition: "0.6s" }}
        onClick={() => {
          scrollTo({ top: 0, behavior: "smooth" });
        }}
      ></button>
    </header>
  );
}
