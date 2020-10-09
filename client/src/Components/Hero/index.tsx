import React, { FunctionComponent } from "react";
import "./hero.css";

export interface HeroProps {
}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container my-auto pb-4">
        <div className="row">
          <div className="col-md-12 col-lg-7 hero-left my-auto">
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

          <div className="col-lg-5 col-md-12 mt-sm-0 pt-sm-0">
            <div className="position-relative">
              <img
                className="mx-auto d-block hero-img"
                src={require("./img/hero.svg")}
                alt="Hero"
                width="800"
              />
            </div>
          </div>

          <div className="col-md-12 col-lg-5  h-100"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

//<a href='https://it.freepik.com/foto-vettori-gratuito/idea'>Idea vettore creata da stories - it.freepik.com</a>
