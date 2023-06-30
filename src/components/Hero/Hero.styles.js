import styled, { keyframes } from "styled-components";
import { clr, fFamily, fSize, pseudoElementCfg, transition, } from "../../globalStyle";

//ANIMATION
const upAndDown = keyframes `
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
  min-height: 100vh;
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
  padding-top: 5rem;
`

export const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 1rem;
`

export const Title = styled.h1`
  font-size: ${fSize.xlarge};
  font-weight: 500;
  margin-left: -.2rem;
`

export const Subtitle = styled.h2`
  font-family: ${fFamily.text};
  font-size: ${fSize.bodyLarge};
  position: relative;
  display: flex;
  align-items: center;
  gap: .5rem;
  padding-left: 5rem;
  &::before {
    ${pseudoElementCfg}
    width: 4rem;
    height: 1px;
    background-color: ${clr.textMain};
    left: 0;
  }

  span {
    color: ${clr.primary};
    font-weight: 600;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Text = styled.div`
  p {
    line-height: ${`calc(${fSize.body} + .5rem)`};
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

export const Social = styled.div`

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

`

export const Image = styled.img`
  max-width: 40%;
`

export const MouseDown = styled.div`
  background-color: ${clr.bodyBg};
  border: 2px solid ${clr.textMainLight};
  border-radius: 10px;

  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 1rem;
  left: 8%;
  width: 20px;
  height: 32px;

  &::before {
    ${pseudoElementCfg}
    width: 2px;
    height: 8px;
    background-color: ${clr.textMainLight};
    top: 3px;

    animation: ${upAndDown} 2s linear infinite;
  }
`