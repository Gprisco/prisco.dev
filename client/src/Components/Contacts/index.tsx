import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

type SocialLink = {
  id: number;
  icon: IconDefinition;
  link: string;
  description: string;
};

export interface ContactsProps {
  sectionId: string;
}

export interface ContactsState {
  icons: Array<SocialLink>;
}

class Contacts extends React.Component<ContactsProps, ContactsState> {
  state = {
    icons: [
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
        link: "https://medium.com/@gprisco01",
        description: "Medium",
      },
      {
        id: 4,
        icon: faEnvelope,
        link: "mailto:giovanni@prisco.dev",
        description: "Email",
      },
    ],
  };

  render() {
    return (
      <section id={this.props.sectionId} className="mt-4 pt-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="h3 text-center mb-4">Reach me</h4>
            </div>
          </div>
          <div className="row">
            {this.state.icons.map((icon) => {
              return (
                <div
                  key={icon.id}
                  className="contact-link col-md-6 col-lg-3 text-center my-1"
                >
                  <div className="row">
                    <a
                      className="mx-auto"
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={icon.icon} size="8x" />
                    </a>
                  </div>
                  <div className="row mt-2 text-center">
                    <p className="lead w-100 icon-description">
                      {icon.description}
                    </p>
                  </div>
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
