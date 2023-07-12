import styled from "styled-components";
import { clr, deviceSize, fSize, padding } from "../../globalStyle";

export const Wrapper = styled.section`
  background-color: ${clr.bodyBg};
  ${padding.section};
`

export const Subtitle = styled.p`
  font-size: ${fSize.bodyLarge};
  padding-top: 1rem;
`

export const Projects = styled.div`
  padding-top: 2rem;
`

export const ProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: ${deviceSize.tablet}){
    gap: 2rem;
  }
`

export const ProjectsItem = styled.li`
  &:not(:last-child)
  {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${clr.gray};
  }

  @media screen and (min-width: ${deviceSize.tablet}){
    &:not(:last-child)
    {
      padding-bottom: 0;
      border-bottom: none;
    }
  }
`