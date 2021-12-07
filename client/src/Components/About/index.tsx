import React from "react";

import "./about.css";

export interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  return (
    <section>
      <div data-aos="slide-up" className="container">
        <div className="row">
          <div className="col">
            <h4 className="h3 text-center mt-2">About Me</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="mt-3 about lead">
              Hello there! As I said, I am a software engineer, more
              specifically I'm a Backend Developer, which means I design and
              develop what you can't see in an application. ‍
              <br />
              <br />I love what I do, it's <b>addictive</b>.‍
              <br />
              <br />
              Computer programming has always been a passion for me and whether
              it regards developing a simple application or building a complex
              system, I <b>thoroughly enjoy</b> doing so.
              <br />
              <br />
              What I love the most about my job is to collaborate and stay in
              contact with many <b>creative</b> people, for this reason I soon
              fell in love with my experience at the Apple Developer Academy in
              Naples.
              <br />
              <br />
              I'm currently studying <b>Computer Science</b> at University of
              Salerno and I'm an{" "}
              <b>Application Developer - IBM Cloud Microservices @ IBM</b>.
              <br />
              <br />
              When I'm not working, I'm <b>constantly learning</b> new things,
              whether it is for the University or for some personal projects. As
              a matter of fact, I'm always trying to expand my tool-belt while
              still trying to reach an expertise level in Backend Development,
              as a matter of fact I'm currently diving deeper and deeper in
              Cloud Native stuff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
