import styled from "styled-components";
import { clr } from "../../../globalStyle";

export const Wrapper = styled.a `
  background-position: 0%;
  background-size: 250%;
  background-color: ${clr.primary};
  background-image: ${`linear-gradient(125deg, ${clr.primary} 50%, #fff 50%)`} ;
  border: 2px solid ${clr.primary};
  border-radius: 12px;
  padding: 1rem 1.5rem;
  color: ${clr.white};
  font-weight: 600;

  &, a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;
    color: ${clr.textLight};
    
  }

  &:hover {
    background-color: white;
    background-position: 100%;
    &, a {
      color: ${clr.primary};
    }
  }
`