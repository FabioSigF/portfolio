import styled from "styled-components";
import { clr, deviceSize, fFamily, fSize, pseudoElementCfg } from "../../globalStyle";

export const Wrapper = styled.div`
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  position: relative;

  -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);

  &::after {
    ${pseudoElementCfg}
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(bottom, #10141b, transparent);
    background: -o-linear-gradient(bottom, #10141b, transparent);
    background: linear-gradient(to top, #10141b, transparent);
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    opacity: 0;
  }
`

export const Description = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  padding-left: 2rem;
  padding-right: 2rem;
  z-index: 1;
  opacity: 0;
`

export const Title = styled.h2`
  color: ${clr.textLight};
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${fSize.body};
`

export const Text = styled.p`
  font-size: ${fSize.body};
  color: ${clr.textLight};
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const Features = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  img {
    width: 30px;
    height: auto;
  }
  
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  @media screen and (min-width: ${deviceSize.mobileL}){
    flex-direction: row;
  }
`