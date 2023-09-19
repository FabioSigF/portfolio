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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 3rem;
`

export const ProjectsItem = styled.li`
  min-height: 100vh;
  max-height: 800px;
  height: 100%;
`