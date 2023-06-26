import styled from "styled-components";
import { clr, fSize,  } from "../../globalStyle";


//Style
export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
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
  gap: .5rem;
  margin-bottom: 1rem;
  
  p {
    display: flex;
    align-items: center;
    gap: .45rem;

    color: ${clr.textLight};
    font-size: ${fSize.body};
    font-weight: 500;
    text-transform: uppercase;
  }
`

export const Title = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
  
  h2 {
    position: absolute;
    color: ${clr.titleDark};
    font-size: ${fSize.xlarge};
    text-transform: uppercase;
    font-weight: 900;
    margin-left: -.2rem;
    
    &:nth-child(1)
    {
      -webkit-text-stroke: 2px ${clr.primary};
    }
    &:nth-child(2)
    {
      color: ${clr.secondary};
      -webkit-text-stroke: 4px ${clr.secondary};
      clip-path: polygon(87% 0, 100% 0%, 100% 100%, 0% 100%);
    }
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Social = styled.ul`
  display: flex;
  align-items: center;
  gap: .5rem;

  a {
    font-size: ${fSize.bodyLarge};
    color: ${clr.textDark};
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: .5rem;
  p {
    font-size: ${fSize.small};

    &:nth-child(2)
    {
      padding-right: 3rem;
    }
  }
`

export const Image = styled.img`
  max-width: 50%;
  
`