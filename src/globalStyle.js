import styled, { createGlobalStyle, css } from 'styled-components'
import { IoCheckmarkCircle, IoLogoInstagram, IoLogoWhatsapp, IoMailOutline } from 'react-icons/io5'
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { BiBookAlt, BiNetworkChart } from 'react-icons/bi'
import { HiDocumentText, HiOutlineDesktopComputer } from 'react-icons/hi';


export const clr = {
  primary: '#FFC801',
  secondary: '#2C444E',
  title: '##2C444E',
  titleDark: "#FFC801",
  text: '#333',
  textHover : '#FFC801',
  textLight: 'rgba(0,0,0, .5)',
  textDark: "#2C444E",
  darkgray: '#1F2027',
  bodyBg: '#fff',
  bodyBgGray: "#fafafa",
  borderGray: "#e9e9e9",
  white: '#fff',
}

export const fSize = {
  xsmall: '.6rem',
  small: '.785rem',
  body: '1rem',
  bodyLarge: '1.2rem',
  title: '1.2rem',
  titleLg: '1.3rem',
  titleXLg: '1.875rem',
  xlarge: '6rem'
}

export const fFamily = {
  title: '"Roboto", sans-serif',
  text: '"Roboto", sans-serif',
}

export const transition = {
  normal: 'all ease 300ms',
}

export const pseudoElementCfg = {
  content: '""',
  display: 'block',
  position: 'absolute',
}

export const deviceSize = {
  mobileS: '320px',
  mobileM: '425px',
  mobileL: '576px',
  tablet: '768px',
  laptopS: '992px',
  laptop: '1024px',
  laptopM: '1200px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const iconList = {
  whatsapp: <IoLogoWhatsapp />,
  email: <IoMailOutline />,
  linkedin: <FaLinkedin/ >,
  linkedinOut: <FaLinkedinIn />,
  github: <FaGithub />,
  githubOut: < FiGithub />,
  instagram: <IoLogoInstagram />,
  check: <IoCheckmarkCircle />,
  network: <BiNetworkChart />,
  computer: <HiOutlineDesktopComputer />,
  book: <BiBookAlt />,
  document: <HiDocumentText />,
}

export const SectionTitle = styled.h2 `
  font-size: ${fSize.body};
  text-transform: uppercase;
  color: ${clr.textLight};
`

export const Header = styled.header `
  font-size: ${fSize.bodyLarge};
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`

export const padding = {
  section: 'padding-top: 3rem; padding-bottom: 3rem;',
}

export const Container = styled.div`
    box-sizing: border-box;
    padding-left: 6%;
    padding-right: 6%;
    width: 100%;
    @media screen and (min-width: ${deviceSize.mobileL}) {
      padding-left: 0;
      padding-right: 0;
      max-width: 540px;
      margin: 0 auto;
    }
    @media screen and (min-width: ${deviceSize.tablet}) {
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

export const GlobalStyle = createGlobalStyle`
  
  body {
    background-color: ${clr.bodyBg};
    box-sizing: border-box;
    color: ${clr.text};
    font-family: ${fFamily.text};
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a, 
  button {
    cursor: pointer;
    transition: ${transition.normal};
    border: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fFamily.title};
  }

  strong
  {
    font-weight: 600;
  }
`