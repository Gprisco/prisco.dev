import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

class Contacts extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/priscogiovanni/",
      },
      { id: 2, icon: faGithub, link: "https://github.com/Gprisco" },
      { id: 3, icon: faMedium, link: "https://medium.com/@gprisco01" },
      { id: 4, icon: faEnvelope, link: "mailto:gprisco01@gmail.com" },
    ],
  };

  render() {
    return (
      <section id={this.props.sectionId} className="mt-4 pt-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="h3 text-center">Contacts</h4>
            </div>
          </div>
          <div className="row">
            {this.state.icons.map((icon) => {
              return (
                <div
                  key={icon.id}
                  className="contact-link col-md-6 col-lg-3 text-center p-2 my-4"
                >
                  <a href={icon.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon.icon} size="8x" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
