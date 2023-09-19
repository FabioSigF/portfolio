import styled from "styled-components";
import { clr, fFamily, fSize, pseudoElementCfg } from "../../globalStyle";

export const Wrapper = styled.div`
  background-size: 100%;
  background-position: center;
  height: 100%;
  position: relative;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;

  &::after {
    ${pseudoElementCfg}
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 20, 30, 0.9);
    -webkit-transition: all 0.35s;
    -o-transition: all 0.35s;
    transition: all 0.35s;
    opacity: 0;
  }

  &:hover {
    &::after {
      opacity: 1;
    }

    background-size: 105%;

    .project__description {
      color: ${clr.textLight};
    }
  }
`;

export const Description = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  color: ${(props) => (props.textdark ? clr.textMain : clr.textLight)};

  padding: 60px;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const Date = styled.span`
  opacity: 0.7;
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: ${fSize.titlesmall};
  font-family: ${fFamily.text};
`;

export const Text = styled.p`
  font-size: ${fSize.body};
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Features = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  font-weight: 600;

  li {
    opacity: 0.7;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 2rem;

`;
