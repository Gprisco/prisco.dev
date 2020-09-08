import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
import "./hero.css";

class Hero extends Component {
  render() {
    return (
      <section id="home" className="hero-section">
        <div className="container pt-4">
          <div className="row my-auto p-4">
            <div className="col-md-12 col-lg-7 my-auto px-4">
              <div className="hero-text">
                <h5 className="h1">
                  Hi<i className="dot">.</i>
                </h5>
                <p>
                  I'm Giovanni Prisco, a software engineer based in Salerno{" "}
                  <span role="img" aria-label="sun">
                    ☀️
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 px-4">
              <img
                className="responsive-img"
                src={require("./img/hero.png")}
                alt=""
              />
            </div>
          </div>
          <div className="chevron-down">
            <div className="chevron-icon">
              <Link smooth to={`#${this.props.nextSection.to}`}>
                <FontAwesomeIcon icon={faChevronDown} size="2x" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//<a href='https://it.freepik.com/foto-vettori-gratuito/idea'>Idea vettore creata da stories - it.freepik.com</a>

export default Hero;
