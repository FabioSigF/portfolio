import styled from "styled-components";
import { clr, deviceSize, fSize, padding } from "../../globalStyle";
import imagebg from '../../imgs/pattern-bg.svg'

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
  position: relative;
  gap: 2rem;
  
  @media screen and (min-width: ${deviceSize.laptop}){
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-direction: row;
  }

`

export const SkillCard = styled.li` 
  background-color: ${clr.bodyBg};
  background-image: ${`url(${imagebg})`};
  border: 5px solid rgba(0, 0, 0, 0.03);
  padding: 2rem;
  position: relative;
  ul
  {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
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
    display: block;
  }
`
