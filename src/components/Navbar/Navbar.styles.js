import styled from "styled-components";
import { clr, deviceSize, fSize, pseudoElementCfg, transition } from "../../globalStyle";

export const Wrapper = styled.header`
  background-color: transparent;

  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  
  &.header_scroll {
    background-color: ${clr.bodyBg};
    box-shadow: 0px 5px 20px -15px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0px 5px 20px -15px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 5px 20px -15px rgba(0,0,0,0.2);
  }

  z-index: 999;
`

export const NavContainer = styled.div `
  padding: 0 6%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  margin: 0 auto;
  
  @media screen and (min-width: ${deviceSize.tablet}) {
    padding: 0;
    max-width: 720px;
  }
  @media screen and (min-width: ${deviceSize.laptop}) {
    max-width: 960px;
  }
  @media screen and (min-width: ${deviceSize.laptopM}) {
    max-width: 1140px;
  }
  @media screen and (min-width: ${deviceSize.laptopL}) {
    max-width: 1320px;
  }
`

export const Nav = styled.nav`
  color: ${clr.text};
  ul {
    display: flex;
    align-items: center;
  }

  a {
    color: ${clr.text};
    padding: 0 1.5rem;

    &:hover,
    &.active {
      color: ${clr.primary};
    }
  }
`

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    display: block;
    position: relative;

    &::before {
      ${pseudoElementCfg}
      background-color: ${clr.gray};
      height: 100%;
      width: 1px ;
      right: -1rem;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    li a {
      font-size: ${fSize.bodyLarge};

      &:hover {
        color: ${clr.primary};
      }
    }
  }

  @media screen and (min-width: ${deviceSize.laptop}){

    ul {
      flex-direction: row;
      gap: 0;
    }

    a {
      padding: 0 1rem;
      font-size: ${fSize.body};
    }

    li{
      a {
        font-size: ${fSize.titlesmall};
      }
    }
  }
`

export const BtnMenuHambuguer = styled.div`
  font-size: ${fSize.titlesmall};
  cursor: pointer;
`

export const NavMobile = styled.nav`
  background-color: ${clr.bodyBg};
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  height: 100vh;
  width: 90%;
  max-width: 320px;

  -webkit-box-shadow: 5px 0px 10px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 5px 0px 10px 0px rgba(0,0,0,0.3);
  box-shadow: 5px 0px 10px 0px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  


  transition: ${transition.normal};

  transform: translateX(-400px);
  visibility: hidden;
  ${props => props.menuopen && ({
    transform: "translateX(0)",
    visibility: "visible",
  })} 
  z-index: 999;
`

export const NavListMobile = styled.ul `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  li a {
    text-transform: uppercase;
    font-size: ${fSize.bodyLarge};
    letter-spacing: 3px;
  }
`

export const BtnMenuClose = styled.div `
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: ${fSize.titlesmall};
  cursor: pointer;
`