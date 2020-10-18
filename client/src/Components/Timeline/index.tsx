import * as React from "react";
import "./timeline.css";

export interface TimelineProps {
  sectionId: string;
}

const Timeline: React.FunctionComponent<TimelineProps> = ({ sectionId }) => {
  return (
    <section id={sectionId}>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <h4 className="h3 text-center mt-2">Experience</h4>
          </div>
        </div>
        <div className="timeline-item" date-is="July 2019">
          <h2 className="h2">High School graduation</h2>
          <p>
            In the 2019 I got my scientific high school diploma from{" "}
            <b>Liceo Scientifico Tito Lucrezio Caro</b> in Sarno.
          </p>
        </div>

        <div
          className="timeline-item"
          date-is="September 2019 - June 2022 (expected)"
        >
          <h2 className="h2">Computer Science student</h2>
          <p>
            After high school I started my Computer Science degree program at
            Università degli Studi di Salerno.
          </p>
        </div>

        <div className="timeline-item" date-is="September 2019 - July 2020">
          <h2 className="h2">Enterprise Student @ Apple Developer Academy</h2>
          <p>
            During the 2019-2020 I have been studying Swift Development at Apple
            Developer Academy in Naples. What made this year so awesome was the
            fact that I had the opportunity to experience UI/UX design and to
            see how the business stuff is managed when building a real-world
            product while specializing myself in developing backend solutions
            thanks to the Enterprise class.
          </p>
        </div>

        <div className="timeline-item" date-is="July 2020 - now">
          <h2 className="h2">
            Pier student as backend developer @ Apple Developer Academy
          </h2>
          <p>
            During my first year at the Academy I realized how much I{" "}
            <b>loved</b> that kind of environment, with lots of amazing people
            and a lot of things to learn while actually doing them, so I'm now a
            Pier Student at Apple Developer Academy working on partner projects
            as a backend developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
