import styled from "styled-components";
import { clr, pseudoElementCfg } from "../../globalStyle";

export const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  
  &.header_scroll {
    background-color: ${clr.bodyBg};
    box-shadow: 0px 5px 20px -15px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0px 5px 20px -15px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 5px 20px -15px rgba(0,0,0,0.2);
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }
  z-index: 999;
`

export const Nav = styled.nav`
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

export const Contact = styled(Nav)`
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