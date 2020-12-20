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
          "My main skill is to design and develop robust, scalable, high quality backend applications using the most modern and most performant technologies.",
        image: "backend",
      },
      {
        id: 2,
        title: "Front-end Web Development",
        paragraph:
          "In addition to developing backend applications, I'm also able to design and develop responsive and high-quality frontend applications, allowing me to be as much flexible as possible when working on a full-stack project.",
        image: "frontend",
      },
      {
        id: 3,
        title: "iOS Mobile Development",
        paragraph:
          "My experience at the Apple Developer Academy gave me the opportunity to experiment with the newest Apple Technologies, especially for Machine Learning and Augmented Reality beyond UIKit and the brand new SwiftUI and I think they are awesome!",
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
              <h3 className="h3 text-center">Tech Stack</h3>
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
