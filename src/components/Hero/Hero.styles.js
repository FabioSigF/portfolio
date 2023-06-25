import styled from "styled-components";
import { clr, fSize, pseudoElementCfg } from "../../globalStyle";

export const Wrapper = styled.section `
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
`

export const Content = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`

export const Description = styled.div `
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Introduction = styled.div `
  font-size: ${fSize.titleLg};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  h1 {
    color: ${clr.titleDark};
    font-size: ${fSize.xlarge};
    margin-left: -.2rem;
  }
  span {
    font-size: ${fSize.bodyLarge};
    color: ${clr.textLight};
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    &::before {
      ${pseudoElementCfg}
      position: relative;
      width: 30%;
      height: 2px;
      border-radius: 5px;
      background-color: ${clr.textLight};
      margin-right: 1rem;
      opacity: .3;
    }
  }
`

export const Subtitle = styled.h3 `

`

export const Text = styled.p `
  line-height: ${fSize.bodyLarge};

  ul
  {
    padding-top: 1rem;
    padding-left: 1.25rem;
    li {
      list-style: circle;
      list-style-type: disc;
    }
  }
`

export const Image = styled.img `
  max-width: 50%;
`