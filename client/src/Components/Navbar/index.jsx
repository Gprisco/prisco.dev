import React, { Component } from "react";
import {
  NavHashLink as NavLink,
  HashLink as Link,
} from "react-router-hash-link";
import Burger from "./Burger";
import Menu from "./Burger/Menu";
import "./nav.css";

class NavBar extends Component {
  state = {
    scrollPos: 0,
    show: true,
    menuOpen: false,
  };

  constructor(props) {
    super(props);
    this.burgerMenuRef = React.createRef();
  }

  burgerMenuListener = (e) => {
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

  toggleMenu = () => {
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

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    //const { scrollPos } = this.state;

    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      //show: document.body.getBoundingClientRect().top > scrollPos,
    });
  };

  render() {
    const { links } = this.props;
    const { show, menuOpen } = this.state;

    return (
      <nav
        className={`navbar sticky-top navbar-light bg-light ${
          show ? "nav-active" : "nav-hidden"
        }`}
      >
        <div className="container">
          <div className="navbar-nav d-flex flex-row w-100 justify-content-end">
            <Link
              className="nav-item w-100 navbar-brand m-3"
              smooth
              to="/#home"
            >
              GP.
            </Link>

            <div className="d-flex mobile-only" ref={this.burgerMenuRef}>
              <Burger open={menuOpen} toggleMenu={this.toggleMenu} />

              <Menu
                open={menuOpen}
                links={links}
                toggleMenu={this.toggleMenu}
              />
            </div>

            {links.map((link) => {
              return (
                <NavLink
                  className="desktop-nav-item nav-item nav-link m-3"
                  smooth
                  to={`#${link.to}`}
                  key={link.to}
                >
                  {link.text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
