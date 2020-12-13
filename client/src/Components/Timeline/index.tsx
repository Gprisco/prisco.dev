import * as React from "react";
import { useState } from "react";

import "./timeline.css";

export interface TimelineProps {}

interface Experience {
  title: string;
  description: string;
  date: string;
  link?: string;
}

const Timeline: React.FunctionComponent<TimelineProps> = () => {
  const [experiences] = useState<Experience[]>([
    {
      title: "High School graduation",
      description:
        "In the 2019 I got my scientific high school diploma from Liceo Scientifico Tito Lucrezio Caro in Sarno.",
      date: "July 2019",
    },
    {
      title: "Computer Science student",
      description:
        "After high school I started my Computer Science degree program at Università degli Studi di Salerno.",
      date: "September 2019 - June 2022 (expected)",
    },
    {
      title: "Enterprise Student @ Apple Developer Academy",
      description:
        "During the 2019-2020 I have been studying Swift Development at Apple Developer Academy in Naples. What made this year so awesome was the fact that I had the opportunity to experience UI/UX design and to see how the business stuff is managed when building a real-world product while specializing myself in developing backend solutions thanks to the Enterprise class.",
      date: "September 2019 - July 2020",
    },
    {
      title: "Pier student as backend developer @ Apple Developer Academy",
      description:
        "During my first year at the Academy I realized how much I loved that kind of environment, with lots of amazing people and a lot of things to learn while actually doing them, so I'm now a Pier Student at Apple Developer Academy working on partner projects as a backend developer.",
      date: "July 2020 - now",
    },
    {
      title: "The Wineboard Project",
      description:
        "Wineboard is a project I'm working on, it is a digital wine list for wine shops which helps them with selling wine and managing their supplies. I've been responsible of the whole full stack design and development of the platform, built using React and Node.js together with Express.",
      date: "February 2020 - now",
      link: "https://wineboard.io",
    },
  ]);

  return (
    <section>
      <div data-aos="fade-right" className="container mt-2">
        <div className="row">
          <div className="col">
            <h4 className="h3 text-center mt-2">Experience</h4>
          </div>
        </div>
        {experiences.map((e) => (
          <div className="timeline-item" date-is={e.date}>
            <h2 className="h2">{e.title}</h2>
            <p>{e.description}</p>
            {e.link && (
              <a href={e.link} target="_blank" rel="noopener noreferrer">
                Give it a look
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
