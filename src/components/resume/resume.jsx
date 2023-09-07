import "./resume.css";
import React, { useState } from "react";
import { data } from "./data";
import { Accordion } from "./accordion";
import { Progress } from "./progress";

export const Resume = () => {
  const [accorData, setaccorData] = useState(data);

  //  progress bar skill data.
  const skillsData = [
    { name: "HTML", progress: 90 },
    { name: "CSS", progress: 80 },
    { name: 'Tailwind ', progress: 80 },
    { name: 'Bootsrap ', progress: 85 },
    { name: 'JS ', progress: 50 },
    { name: 'React.js', progress: 75 },
    { name: 'Python', progress: 70 },
    { name: 'Django', progress: 80 },
  ];

  return (
    <section id="resume">
      <div className="round_accor"></div>

      <div className="resume_txt">
        <h1 className="">Resume</h1>
        <p>
          My <span className="text_ch">Story</span>
        </p>
      </div>

      <div className="container resume_container">
        <div className="accordion_container">
          {accorData.map((curElem) => {
            const { id } = curElem;
            return <Accordion key={id} {...curElem} />;
          })}
        </div>
        {/* progress bar */}

        <div className="progress_container">
            {skillsData.map((skill) => (
              <Progress
                key={skill.name}
                skill={skill.name}
                progress={skill.progress}
              />
            ))}
          </div>
          
      </div>
    </section>
  );
};
