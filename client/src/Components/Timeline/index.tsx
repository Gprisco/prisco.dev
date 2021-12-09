import * as React from "react";
import { useState } from "react";

import "./timeline.css";

export interface TimelineProps {}

interface Experience {
  title: string;
  description: string;
  date: string;
  link?: string;
  color?: string;
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
        "During the 2019-2020 I have been studying Swift Development at Apple Developer Academy in Naples. I experienced UI/UX design and saw how to develop a business plan and the consequent business model when building a real-world product, in the meanwhile I was practicing server side development thanks to the Enterprise class.",
      date: "September 2019 - July 2020",
    },
    {
      title: "Pier student as backend developer @ Apple Developer Academy",
      description:
        "During my first year at the Academy I realized how much I loved that kind of environment, with lots of amazing people and a lot of things to learn while actually doing them, so I'm now a Pier Student at Apple Developer Academy working on partner projects as a backend developer.",
      date: "July 2020 - now",
    },
    {
      title: "Decanto",
      description:
        "Decanto is a mobile application for pairing food and wine. I'm in charge of developing and mantaining the REST APIs which are implemented by the application for providing data and compute the pairings between food and wines.",
      date: "July 2021 - On Going",
      link: "https://decanto.wine",
      color: "#6d083c",
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
          <div key={e.title} className="timeline-item" date-is={e.date}>
            <h2 className="h2">{e.title}</h2>
            <p>{e.description}</p>
            {e.link && (
              <div className="btn-custom">
                <a href={e.link} target="blank" rel="noopener">
                  <p>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">Give it a look</span>
                  </p>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
