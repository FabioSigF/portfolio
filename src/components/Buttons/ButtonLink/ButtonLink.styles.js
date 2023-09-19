import styled from "styled-components";
import { clr, pseudoElementCfg, transition } from "../../../globalStyle";

export const Wrapper = styled.a`
  color: ${props => props.btnlight ? clr.textLight : clr.textMain};
  font-weight: 600;
  position: relative;
  
  &, a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;
  }
  &::before {
      ${pseudoElementCfg}
      width: 0;
      height: 1px;
      background-color: ${props => props.btnlight ? clr.textLight : clr.textMain};
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