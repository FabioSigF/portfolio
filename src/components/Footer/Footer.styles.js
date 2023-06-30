import styled from "styled-components";
import { clr } from "../../globalStyle";

export const Wrapper = styled.footer `
  background-color: ${clr.secondary};
  padding: 2rem 0;
`

export const Content = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Copyright = styled.div `
  padding: 1rem 0;
  color: ${clr.text};
  font-weight: 500;
  text-align: center;
  a {
    color: ${clr.text};
    &:hover {
      color: ${clr.textHover};
    }
  }
`