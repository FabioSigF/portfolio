import styled from "styled-components";
import { borderRadius, clr, fSize, padding } from "../../globalStyle";

export const Wrapper = styled.div `
  ${padding.section}
  background-color: ${clr.primary};
`

export const Description = styled.div `
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: ${clr.textLight};
  p {
    margin-top: 1rem;
    bottom: 1rem;
  }
`

export const SkillsList = styled.ul `
  display: grid;
  grid-template-columns: 1fr 1fr .75fr;
  gap: 1rem;
`

export const SkillCard = styled.li `
  background-color: ${clr.secondary};
  border-radius: ${borderRadius.normal};
  padding: 2rem;
  ul
  {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: .5rem;
      width: 50%;

      font-weight: 500;
      margin-bottom: .75rem;
      padding-bottom: .5rem;
      
      p {
        font-size: ${fSize.xsmall};
        font-weight: 700;
        color: ${clr.textMainLight};
        text-transform: uppercase;
        display: block;
        padding-left: 1.5rem;
        width: 100%;
      }
    }
  }
`

export const SkillHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  
  color: ${clr.primary};
  font-size: ${fSize.titlesmall};
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  
  h3 {
    font-size: ${fSize.bodyLarge};
    font-weight: 700;
  }
`
