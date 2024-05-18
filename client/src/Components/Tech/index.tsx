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
          "My main skill is to design and develop robust, scalable, high quality backend applications using the most modern and most performant technologies, when there's the need to quickly develop some prototype or to spin up some APIs for accessing data in a database, my technology of choice is whatever gets the job done at its best. Currently I'm mostly using Java at work and Golang for personal projects.",
        image: "backend",
      },
      {
        id: 2,
        title: "Devops",
        paragraph:
          "When it comes to devops I still have much to learn, my experience includes building GitHub actions to automate unit testing and the deployment of the application (using Docker) to the production server and extensive pipelines development with Jenkins. I'm also experienced in configuring prometheus and building grafana dashboards as well as monitoring with datadog.",
        image: "frontend",
      },
      {
        id: 3,
        title: "What about some frontend?",
        paragraph:
          "In my job I sometimes find myself building some prototypes for easily integrating and demonstrating system functionalities, this allowed me to learn some basic frontend development with React.",
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
