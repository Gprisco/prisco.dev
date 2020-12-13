import styled from "styled-components";

export const StyledBurger = styled.button`
  top: 5%;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 999;
  margin-top: auto;
  margin-bottom: auto;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 992px) {
    div {
      width: 2rem;
      height: 0.25rem;
      background-color: var(--accent);
      transition: transform 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(-20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
