import styled from "styled-components";
import { clr, pseudoElementCfg } from "../../globalStyle";

export const Wrapper = styled.header `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`

export const Nav = styled.nav `
  color: ${clr.text};
  ul {
    display: flex;
    align-items: center;
  }

  a {
    color: ${clr.text};
    padding: 0 1.5rem;

    &:hover {
      color: ${clr.textHover};
    }
  }
`

export const Contact = styled(Nav) `
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    position: relative;

    &::before {
      ${pseudoElementCfg}
      background-color: ${clr.text};
      height: 100%;
      width: 1px ;
      right: -1rem;
    }
  }

  a {
    padding: 0 1rem;
  }

  li:last-child {
    a {
      padding: 0 0 0 1rem;
    }
  }
`