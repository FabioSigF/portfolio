import styled from "styled-components";
import { borderRadius, clr, deviceSize, fSize, padding } from "../../globalStyle";

export const Wrapper = styled.div`
  ${padding.section}
  background-color: ${clr.primary};
`

export const Description = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: ${clr.textLight};
  p {
    margin-top: 1rem;
    bottom: 1rem;
  }
`

export const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: ${deviceSize.laptop}){
    display: grid;
    grid-template-columns: 1fr 1fr .75fr;
    flex-direction: row;
  }
`

export const SkillCard = styled.li`
  background-color: ${clr.secondary};
  border-radius: ${borderRadius.normal};
  padding: 2rem;
  ul
  {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: .25rem;
      width: 50%;

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
    }

    @media screen and (min-width: ${deviceSize.mobileM}){
      flex-direction: row;
    }
  }
`

export const SkillHeader = styled.div`
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
