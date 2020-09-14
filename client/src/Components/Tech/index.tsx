import React from "react";
import Card, { TechCard } from "./Card";
import "./tech.css";

export interface TechProps {
  sectionId: string;
}

export interface TechState {
  cards: Array<TechCard>;
}

class Tech extends React.Component<TechProps, TechState> {
  state = {
    cards: [
      {
        id: 1,
        title: "Front-end Web Development",
        paragraph:
          "One of my main skill is to design and develop responsive, high quality web applications using the newest and most performant technologies.",
        image: "frontend",
      },
      {
        id: 2,
        title: "Back-end Web Development",
        paragraph:
          "In addition to developing frontend applications, I'm also able to design and develop robust and scalable backend systems allowing me to be as much flexible as possible when working on a full-stack project.",
        image: "backend",
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
      <section id={this.props.sectionId}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="h3 text-center">Tech</h3>
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
