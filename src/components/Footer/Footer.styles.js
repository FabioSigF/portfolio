import styled from "styled-components";
import { clr } from "../../globalStyle";

export const Wrapper = styled.footer `

`

export const Content = styled.div `

`

export const Copyright = styled.div `
  padding: 1rem 0;
  color: ${clr.text};
  width: 100%;
  text-align: center;
  a {
    color: ${clr.text};
    &:hover {
      color: ${clr.textHover};
    }
  }
`