import styled from "styled-components";
import { clr, fSize } from "../../globalStyle";

export const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: ${fSize.titlesmall};
    font-weight: 700;
    color: ${clr.textDark};
  }

  span {
    text-transform: uppercase;
    font-size: ${fSize.xsmall};
    padding-top: .2rem;
    letter-spacing: 8px;
  }
`
