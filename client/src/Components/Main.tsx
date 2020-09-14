import React, { Component } from "react";
import NavBar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Tech from "./Tech";
import Contacts from "./Contacts";
import Footer from "./Footer";

export interface MainProps {}

export type SectionLink = {
  to: string;
  text: string;
};

export interface MainState {
  links: Array<SectionLink>;
}

class Main extends Component<MainProps, MainState> {
  state = {
    links: [
      { to: "about", text: "about" },
      { to: "tech-stack", text: "tech" },
      { to: "contacts", text: "Reach me" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <NavBar links={this.state.links} />
        <Hero nextSection={this.state.links[0]} />
        <About sectionId={this.state.links[0].to} />
        <Tech sectionId={this.state.links[1].to} />
        <Contacts sectionId={this.state.links[2].to} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
