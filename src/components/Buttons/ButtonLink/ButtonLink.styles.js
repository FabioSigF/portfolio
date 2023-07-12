import styled from "styled-components";
import { clr, pseudoElementCfg, transition } from "../../../globalStyle";

export const Wrapper = styled.a`
  padding: 1rem 1.5rem;
  color: ${clr.textMain};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .75rem;

  position: relative;
  &::before {
      ${pseudoElementCfg}
      width: 0;
      height: 1px;
      background-color: ${clr.textMain};
      bottom: -3px;
      right: 0;
      transition: ${transition.normal};
    }   
    &:hover {
      &::before {
      left: 0;
      width: 100%;
    }    
  }
`