import React, { Component } from "react";
import {
  NavHashLink as NavLink,
  HashLink as Link,
} from "react-router-hash-link";
import Burger from "./Burger";
import Menu from "./Burger/Menu";
import { SectionLink } from "Components/Main";

import "./nav.css";

export interface NavBarProps {
  navbarRef: React.RefObject<HTMLElement>;
  links: Array<SectionLink>;
}

export interface NavBarState {
  scrollPos: number;
  show: boolean;
  menuOpen: boolean;
}

class NavBar extends Component<NavBarProps, NavBarState> {
  state = {
    scrollPos: 0,
    show: true,
    menuOpen: false,
  };

  burgerMenuRef: React.RefObject<any>;

  constructor(props: NavBarProps) {
    super(props);
    this.burgerMenuRef = React.createRef();
  }

  burgerMenuListener = (e: Event): void => {
    if (
      !this.burgerMenuRef.current ||
      this.burgerMenuRef.current.contains(e.target)
    ) {
      return;
    }

    this.setState({ menuOpen: !this.state.menuOpen });
    document.removeEventListener("mousedown", this.burgerMenuListener);
    document.removeEventListener("touchstart", this.burgerMenuListener);
  };

  toggleMenu = (): void => {
    const menuOpen = !this.state.menuOpen;

    if (menuOpen) {
      document.addEventListener("mousedown", this.burgerMenuListener);
      document.addEventListener("touchstart", this.burgerMenuListener);
    } else {
      document.removeEventListener("mousedown", this.burgerMenuListener);
      document.removeEventListener("touchstart", this.burgerMenuListener);
    }

    this.setState({ menuOpen });
  };

  render() {
    const { links } = this.props;
    const { show, menuOpen } = this.state;

    return (
      <nav
        ref={this.props.navbarRef}
        data-aos="fade-down"
        className={`navbar sticky-top navbar-light bg-light ${
          show ? "nav-active" : "nav-hidden"
        }`}
      >
        <div className="container">
          <div className="navbar-nav d-flex flex-row w-100 justify-content-end">
            <Link
              className="nav-item w-100 navbar-brand m-3 font-weight-light"
              smooth
              to="/#home"
            >
              GP
            </Link>

            <div className="d-flex mobile-only" ref={this.burgerMenuRef}>
              <Burger open={menuOpen} toggleMenu={this.toggleMenu} />

              <Menu
                open={menuOpen}
                links={links}
                toggleMenu={this.toggleMenu}
              />
            </div>

            <ul className="navbar-nav mr-auto flex-row">
              {links.map((link) => {
                return (
                  <li
                    key={link.to}
                    className="desktop-nav-item nav-item my-auto mx-4 w-25 text-center"
                  >
                    <NavLink className="nav-link" smooth to={`#${link.to}`}>
                      {link.text}
                    </NavLink>
                  </li>
                );
              })}
              <div className="underbar"></div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
