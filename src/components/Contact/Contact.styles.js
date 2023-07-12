import styled from "styled-components";
import { clr, deviceSize, fSize, padding } from "../../globalStyle";

export const Wrapper = styled.section`
  ${padding.section}
  background-color: ${clr.textMain};
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
  @media screen and (min-width: ${deviceSize.laptop}) {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    flex-direction: row;
  }
`

export const Wheel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 200px;
    height: auto;
  }
`

export const Content = styled.div`
  color: ${clr.textLight};
  padding-top: 2rem;
  text-align: center;
  h3
  {
    font-size: ${fSize.titlesmall};
    font-weight: 700;
    margin-bottom: 2rem;
  }
  p 
  {
    opacity: .7;
  }

  @media screen and (min-width: ${deviceSize.laptop}){
    text-align: start;
  }
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 5rem;
  color: ${clr.textLight};
  flex-direction: column;
  @media screen and (min-width: ${deviceSize.laptop}){
    flex-direction: row;
  }
`

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: .5rem;
  color: ${clr.textLight};
  span {
    opacity: .7;
  }
  a {
    font-size: ${fSize.bodyLarge};
  }

  @media screen and (min-width: ${deviceSize.laptop}){
    flex-direction: row;
  }
`

export const Medias = styled.div`
  display: flex;
  flex-direction: column;
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

  @media screen and (min-width: ${deviceSize.laptop}){
    flex-direction: row;
  }
`