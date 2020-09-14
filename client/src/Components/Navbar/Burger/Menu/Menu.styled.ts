import styled from "styled-components";

export const StyledMenu = styled.div`
  position: fixed;
  flex-direction: column;
  background: var(--text);
  height: 100vh;
  text-align: right;
  padding: 1.2rem;
  overflow-y: auto;
  font-size: 14pt;
  font-weight: 500;
  text-transform: uppercase;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({ open }) =>
    open ? "5px 3px 10px rgba(0, 0, 0, 0.2)" : "none"};
  width: 62%;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  display: flex;
  overflow-x: hidden !important;
  color: #f8f8f8;
`;
