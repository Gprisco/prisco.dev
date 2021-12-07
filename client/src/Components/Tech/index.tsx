import React from "react";
import Card, { TechCard } from "./Card";

import "./tech.css";

export interface TechProps {}

export interface TechState {
  cards: Array<TechCard>;
}

class Tech extends React.Component<TechProps, TechState> {
  state = {
    cards: [
      {
        id: 1,
        title: "Back-end Web Development",
        paragraph:
          "My main skill is to design and develop robust, scalable, high quality backend applications using the most modern and most performant technologies, when there's the need to quickly develop some prototype or to spin up some APIs for accessing data in a database, my technology of choice is Node.js, which I use together with Typescript when the project gets bigger. Currently I'm learning Java EE and the Spring framework and I had the opportunity to try some Golang too.",
        image: "backend",
      },
      {
        id: 2,
        title: "Devops",
        paragraph:
          "When it comes to devops I still have much to learn, my experience includes building some GitHub actions to automate unit testing and the deployment of the application (using Docker) to the production server. I also had the opportunity to configure some serious monitoring for production applications using Prometheus and building dashboards with Grafana",
        image: "frontend",
      },
      {
        id: 3,
        title: "What about some frontend?",
        paragraph:
          "In my job I sometimes find myself building some prototypes for easily integrating and demonstrating system functionalities, this allowed me to learn some basic frontend development with React",
        image: "ios",
      },
    ],
  };

  render() {
    return (
      <section>
        <div className="container">
          <div data-aos="fade-right" className="row">
            <div className="col">
              <h3 className="h3 text-center">What I practically do</h3>
            </div>
          </div>
          <div className="row">
            {this.state.cards.map((tech) => {
              return <Card tech={tech} key={tech.id} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Tech;
