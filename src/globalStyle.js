import styled, { createGlobalStyle } from 'styled-components'
import { IoCheckmarkCircle, IoLogoInstagram, IoLogoWhatsapp, IoMailOutline, IoPaperPlaneOutline } from 'react-icons/io5'
import { FaGithub, FaLinkedin, FaLinkedinIn, FaShareSquare } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { BiBookAlt, BiNetworkChart } from 'react-icons/bi'
import { HiDocumentText, HiOutlineDesktopComputer } from 'react-icons/hi';


export const clr = {
  primary: '#6244c5',
  secondary: '#ffc448',
  textMain: '#12141D',
  textMainLight: '#5a5a5a',
  textLight : '#fff',
  darkgray: '#1F2027',
  bodyBg: '#fff',
  bodyBgGray: "#fafafa",
}

export const fSize = {
  xsmall: '.6rem',
  small: '.875rem',
  body: '1rem',
  bodyLarge: '1.25rem',
  titlesmall: '1.8rem',
  title: '2.8rem',
  xlarge: '4rem'
}

export const fFamily = {
  title: '"DM Sans", sans-serif',
  text: '"Inter", sans-serif',
}

export const transition = {
  normal: 'all ease 200ms',
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
  paperPlane: <IoPaperPlaneOutline />,
  share: <FaShareSquare />,
}

export const SectionTitle = styled.h2 `
  font-size: ${fSize.title};
  font-weight: 500;
  color: ${props => props.light ? clr.textLight : clr.textMain};
  max-width: 300px;
`

export const padding = {
  section: 'padding-top: 3rem; padding-bottom: 3rem;',
}

export const borderRadius = {
  button: "12px",
  normal: "16px",
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
    color: ${clr.textMain};
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