import React, { FunctionComponent, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

import "./hero.css";

type SocialLink = {
  id: number;
  icon: IconDefinition;
  link: string;
  description: string;
};

export interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  const icons: SocialLink[] = [
    {
      id: 1,
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/priscogiovanni/",
      description: "Linkedin",
    },
    {
      id: 2,
      icon: faGithub,
      link: "https://github.com/Gprisco",
      description: "GitHub",
    },
    {
      id: 3,
      icon: faMedium,
      link: "https://medium.com/@gprisco",
      description: "Medium",
    },
    {
      id: 4,
      icon: faEnvelope,
      link: "mailto:giovanni@prisco.dev",
      description: "Email",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div style={{ height: "100px" }} className="row mobile-only"></div>
        <div className="row">
          <div
            data-aos="fade-right"
            className="col-md-12 col-lg-6 hero-left my-auto"
          >
            <div className="hero-text py-4">
              <h5 className="h1">
                Hi<span className="dot">.</span>
              </h5>
              <p className="hero-paragraph">
                I'm Giovanni Prisco, a software engineer based in Salerno{" "}
                <span role="img" aria-label="sun">
                  ☀️
                </span>
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="col-lg-6 col-md-12 mt-sm-0 pt-sm-0"
          >
            <img
              className="mx-auto d-block hero-img"
              src={require("./img/hero.svg")}
              alt="Hero"
              width="auto"
            />
          </div>

          <div data-aos="fade-up" className="col-lg-4 col-md-12 my-auto">
            <div className="row pb-4">
              {icons.map((icon) => {
                return (
                  <div key={icon.id} className="col-3 text-center my-1">
                    <a
                      className="contact-link mx-auto"
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={icon.icon} size="3x" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

//<a href='https://it.freepik.com/foto-vettori-gratuito/idea'>Idea vettore creata da stories - it.freepik.com</a>
