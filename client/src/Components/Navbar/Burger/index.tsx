import React from "react";
import { StyledBurger } from "./Burger.styled";

export interface BurgerProps {
  open: boolean;
  toggleMenu: VoidFunction;
}

const Burger: React.FunctionComponent<BurgerProps> = ({ open, toggleMenu }) => {
  return (
    <StyledBurger open={open} onClick={toggleMenu}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
