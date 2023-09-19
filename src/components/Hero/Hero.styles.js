import styled, { keyframes } from "styled-components";
import { clr, deviceSize, fFamily, fSize, pseudoElementCfg, transition, } from "../../globalStyle";

//ANIMATION
const upAndDown = keyframes`
  0% {
    transform: translateY(3px);
  } 30% {
    transform: translateY(12px);
  } 100% {
    transform: translateY(3px);
  }
`


//STYLES
export const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  max-height: 700px;
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
  padding-top: 8rem;

  @media screen and (min-width: ${deviceSize.tablet}){
    align-items: flex-start;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  
  @media screen and (min-width: ${deviceSize.tablet}){
    width: 50%;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;

  @media screen and (min-width: ${deviceSize.tablet}){
    align-items: flex-start;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: ${deviceSize.tablet}){
    align-items: flex-start;
  }
`

export const Title = styled.h1`
  font-size: ${fSize.titleMobile};
  font-weight: 500;
  margin-left: -.2rem;
  
  @media screen and (min-width: ${deviceSize.laptop}){
    font-size: ${fSize.xlarge};
    text-align: start;
  }
`

export const Subtitle = styled.h2`
  font-family: ${fFamily.text};
  font-size: ${fSize.bodyLarge};
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: .5rem;
  

  span {
    color: ${clr.primary};
    font-weight: 600;
  }
  
  @media screen and (min-width: ${deviceSize.tablet}){
    flex-direction: row;
    padding-left: 5rem;
    &::before {
      ${pseudoElementCfg}
      width: 4rem;
      height: 1px;
      background-color: ${clr.textMain};
      left: 0;
    }
  } 
`

export const Text = styled.div`
  p {
    line-height: ${`calc(${fSize.body} + .5rem)`};
    text-align: center;
  }

  @media screen and (min-width: ${deviceSize.tablet}){
    p {
      text-align: start;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  @media screen and (min-width: ${deviceSize.mobileM}){
    gap: 2.5rem;
  }
`

export const Social = styled.div`
  display: none;
  visibility: hidden;

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: ${fSize.bodyLarge};
      padding: 1rem 1.2rem;
      background-color: ${clr.bodyBg};
      border-radius: 50%;
      transition: ${transition.normal};

      &:hover {
        background-color: ${clr.textMain};
        color: ${clr.textLight};
      }
    }
  }

  @media screen and (min-width: ${deviceSize.tablet}){
    display: block;
    visibility: visible;
  }
`

export const Image = styled.img`
  width: 50%;
  display: none;

  @media screen and (min-width: ${deviceSize.tablet}){
    display: block;
  }
`