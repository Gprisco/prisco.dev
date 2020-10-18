import React, { Component } from "react";
import NavBar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Timeline from "./Timeline";
import Tech from "./Tech";
import Contacts from "./Contacts";
import Footer from "./Footer";

import PreLoader from "./PreLoader";

export interface MainProps {}

export type SectionLink = {
  to: string;
  text: string;
};

export interface MainState {
  links: Array<SectionLink>;
  loading: boolean;
  showingLoader: boolean;
}

class Main extends Component<MainProps, MainState> {
  state = {
    links: [
      { to: "about", text: "about" },
      { to: "experience", text: "experience" },
      { to: "tech-stack", text: "tech" },
      { to: "contacts", text: "reach me" },
    ],
    loading: true,
    showingLoader: true,
  };

  componentDidMount() {
    window.onload = () => {
      this.setState({ loading: false });
    };
  }

  componentDidUpdate() {
    if (this.state.showingLoader)
      setTimeout(() => this.setState({ showingLoader: false }), 350);
  }

  render() {
    const { loading, showingLoader, links } = this.state;

    return showingLoader ? (
      <PreLoader className={loading ? "" : "op-0"} />
    ) : (
      <>
        <NavBar links={links} />
        <Hero />
        <About sectionId={links[0].to} />
        <Timeline sectionId={links[1].to} />
        <Tech sectionId={links[2].to} />
        <Contacts sectionId={links[3].to} />
        <Footer />
      </>
    );
  }
}

export default Main;
