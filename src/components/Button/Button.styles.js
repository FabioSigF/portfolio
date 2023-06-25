import styled from "styled-components";
import { clr, fSize } from "../../globalStyle";

export const Wrapper = styled.a `
  background-position: 0%;
  background-size: 250%;
  background-color: ${clr.primary};
  background-image: ${`linear-gradient(125deg, ${clr.primary} 50%, #fff 50%)`} ;
  border: 2px solid ${clr.primary};
  border-radius: 2px;
  padding: 1.5rem 2rem;
  color: ${clr.white};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: white;
    background-position: 100%;
    color: ${clr.primary};
  }
`