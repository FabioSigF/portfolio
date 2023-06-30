import styled from "styled-components";
import { clr, fSize, pseudoElementCfg } from "../../globalStyle";

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;

  &.reverse {
    flex-direction: row-reverse;
  }

`

export const Image = styled.img `
  display: block;
  width: 50%;
`

export const Description = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 50%;
`

export const Title = styled.h2 `
  font-weight: 700;
  font-size: ${fSize.bodyLarge};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: .5rem;
`

export const Text = styled.p `
  font-size: ${fSize.body};
  color: ${clr.textMainLight};
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const Features = styled.ul `
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  li {
    font-weight: 500;
    position: relative;
    
    &:not(:last-child)
    {
      &::before {
      ${pseudoElementCfg}
      background-color: ${clr.textMainLight};
      border-radius: 50%;
      width: 5px;
      height: 5px;
      top: 6px;
      right: -10px;
    }
    }
  }


  
`

export const Buttons = styled.div `
  display: flex;
  align-items: center;
  gap: .5rem;
`