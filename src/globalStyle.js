import styled, { createGlobalStyle } from 'styled-components'
import { IoCheckmarkCircle, IoLogoInstagram, IoLogoWhatsapp, IoMailOutline, IoPaperPlaneOutline } from 'react-icons/io5'
import { FaGithub, FaLinkedin, FaLinkedinIn, FaShareSquare } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { BiBookAlt, BiMenuAltRight, BiNetworkChart, BiX } from 'react-icons/bi'
import { HiDocumentText, HiOutlineDesktopComputer } from 'react-icons/hi';
import { FcAutomotive, FcFilmReel, FcGlobe } from 'react-icons/fc';
import reset from 'styled-reset'

export const clr = {
  primary: '#6244c5',
  secondary: '#ffc448',
  textMain: '#12141D',
  textMainLight: '#5a5a5a',
  textLight : '#fff',
  darkgray: '#1F2027',
  bodyBg: '#fff',
  bodyBgGray: "#fafafa",
  gray: "#d1d1d1",
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
  colorCar: <FcAutomotive />,
  colorFilmReel: <FcFilmReel />,
  colorGlobe: <FcGlobe />,
  menuHamburger: <BiMenuAltRight />,
  closeX: <BiX />,
}

export const fSize = {
  xsmall: '.6rem',
  small: '.875rem',
  body: '1rem',
  bodyLarge: '1.25rem',
  titlesmall: '1.8rem',
  title: '2.8rem',
  titleMobile: '2.5rem',
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


export const SectionTitle = styled.h2 `
  font-size: ${fSize.titleMobile};
  font-weight: 500;
  color: ${props => props.light ? clr.textLight : clr.textMain};
  max-width: 300px;
  
  @media screen and (min-width: ${deviceSize.laptop}){
    font-size: ${fSize.title};
  }
`

export const padding = {
  section: 'padding-top: 3rem; padding-bottom: 3rem;',
}

export const borderRadius = {
  button: "12px",
  normal: "16px",
}


export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

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

  p {
    font-size: ${fSize.body};
    line-height: ${`calc(${fSize.body} + .5rem)`};
  }

  strong
  {
    font-weight: 600;
  }
`