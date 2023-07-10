import styled from "styled-components";
import { clr, fSize, padding, pseudoElementCfg } from "../../globalStyle";

export const Wrapper = styled.section`
  ${padding.section}
  background-color: ${clr.textMain};
`

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 2rem;

`

export const Wheel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    ${pseudoElementCfg}
    background-color: ${clr.textMain};
    width: 10px;
    height: 10px;
  }
`

export const Content = styled.div`
  color: ${clr.textLight};
  padding-top: 2rem;
  h3
  {
    font-size: ${fSize.titlesmall};
    font-weight: 700;
    margin-bottom: 2rem;
  }
  p 
  {
    line-height: ${`calc(${fSize.body} + .5rem)`};
    opacity: .7;
  }
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  color: ${clr.textLight};
`

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  color: ${clr.textLight};
  span {
    opacity: .7;
  }
  a {
    font-size: ${fSize.bodyLarge};
  }
`

export const Medias = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  ul {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  span {
    opacity: .7;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: ${fSize.bodyLarge};
    padding: 1rem 1.2rem;
    border-radius: 50%;
    background-color: ${clr.darkgray};

    &:hover {
      background-color: ${clr.bodyBg};
      color: ${clr.textMain};
    }
  }
`