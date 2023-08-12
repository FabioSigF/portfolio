import styled from "styled-components";
import { clr, deviceSize, fSize, padding, pseudoElementCfg } from "../../globalStyle";

export const Wrapper = styled.section`
  background-color: ${clr.bodyBg};
  ${padding.section};
  overflow-x: hidden;
`

export const Subtitle = styled.p`
  font-size: ${fSize.bodyLarge};
  padding-top: 1rem;
`

export const Projects = styled.div`
  position: relative;
  min-height: 580px;
  margin-top: 1rem;
`

export const ProjectsList = styled.ul`
  position: absolute;
  height: 540px;
  top: 0;
  left: -35vw;
  right: 0;
  bottom: 0;
  width: 150vw;

  & .mySwiper {
    height: 100%;
  }

  & .swiper-slide-active {
    .project {
      &::after {
        opacity: 1;
      }
    }
    .project__description {
      opacity: 1;
    }
  }
`

export const ProjectsItem = styled.li`
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;

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