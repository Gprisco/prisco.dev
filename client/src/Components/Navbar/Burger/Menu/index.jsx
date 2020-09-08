import React from "react";
import { StyledMenu } from "./Menu.styled";
import { NavHashLink as NavLink } from "react-router-hash-link";

const Menu = ({ open, links, toggleMenu }) => {
  return (
    <StyledMenu className="sidebar" open={open}>
      <ul className="nav h-100 d-flex flex-column justify-content-center">
        {links.map((link) => (
          <li className="nav-item nav-link py-2" key={link.to}>
            <div className="text-center">
              <NavLink
                className="nav-item nav-link m-3"
                smooth
                to={`#${link.to}`}
                key={link.to}
                onClick={toggleMenu}
              >
                {link.text}
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

export default Menu;
