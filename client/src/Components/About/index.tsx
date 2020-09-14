import React from "react";
import "./about.css";

export interface AboutProps {
  sectionId: string;
}

const About: React.SFC<AboutProps> = ({ sectionId }) => {
  return (
    <section id={sectionId}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="h3 text-center">About Me</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="mt-3 about lead">
              I'm a <b>Software Engineer</b> and a student at University of
              Salerno. ‍I love what I do, it's <b>addictive</b>.‍
              <br />
              <br />
              Computer programming has always been a passion for me and whether
              it regards developing a simple mobile application or building a
              complex system, I <b>thoroughly enjoy</b> doing so.
              <br />
              <br />
              What I love the most about my job is to collaborate and stay in
              contact with many <b>creative</b> people, for this reason I soon
              fell in love with my experience at the Apple Developer Academy in
              Naples.
              <br />
              <br />
              If you think you have some good ideas to share, I will be very
              happy to hear them from you, feel free to contact me{" "}
              <span role="img" aria-label="confetti">
                🥳
              </span>
              .‍
              <br />
              <br />
              Actually I'm studying <b>Computer Science</b> at University of
              Salerno and I'm for the second year at Apple Developer Academy in
              Naples as a <b>Pier Student</b> and <b>backend developer</b>.
              <br />
              <br />
              When I'm not working alongside clients, I'm{" "}
              <b>constantly learning</b> new things, whether it is for the
              University or for some personal projects. As a matter of fact, I'm
              always trying to expand my tool-belt. Currently I'm diving deeper
              in the AI world and I recently got the{" "}
              <i>"AI Programming with Python" nanodegree</i> from Udacity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
