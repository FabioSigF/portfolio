import styled from "styled-components";
import { clr, deviceSize, fSize } from "../../../globalStyle";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: .25rem;
  width: 100%;
  font-weight: 500;
  margin-bottom: .75rem;
  padding-bottom: .5rem;
  
  span {
    font-size: ${fSize.xsmall};
    font-weight: 700;
    color: ${clr.textMainLight};
    text-transform: uppercase;
    display: block;
    padding-left: 1.5rem;
    width: 100%;
  }

  p {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  
  @media screen and (min-width: ${deviceSize.mobileM}){
    width: 50%;
  }
`