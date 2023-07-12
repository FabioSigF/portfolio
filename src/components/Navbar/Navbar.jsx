import React from 'react'
import Logo from '../Logo/Logo'

//STYLES
import { iconList } from '../../globalStyle'
import { BtnMenuClose, BtnMenuHambuguer, Contact, Nav, NavContainer, NavListMobile, NavMobile, Wrapper } from './Navbar.styles'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {

  //Background color of navbar when scroll down
  const [changeColor, setChangeColor] = useState(false);
  //Screen size
  const [screenSize, setScreenSize] = useState();
  //Show menu mobile if true
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  //If open menu, sidebar menu opens
  const [openMenu, setOpenMenu] = useState(false);

  function scrollPosition() {
    if (window.scrollY > 10) {
      setChangeColor(true);
    }
    else {
      setChangeColor(false);
    }
  }

  useEffect(() => {

    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize);

    handleResize();

    window.addEventListener('scroll', scrollPosition);

    return () => window.removeEventListener('resize', handleResize)

  }, []);

  //Show menu desktop according to window size
  useEffect(() => {
    if (screenSize >= 992) {
      setShowMenuMobile(false)
      setOpenMenu(false);
    } else {
      setShowMenuMobile(true)
    }
  }, [screenSize])

  //Show menu mobile
  const toggleMenuMobile = (e) => {
    e.preventDefault()
    setOpenMenu(!openMenu);
  }
  return (
    <Wrapper className={changeColor ? "header_scroll" : ''}>
      <NavContainer>
        <Logo />
        {!showMenuMobile && (
          <>
            <Nav>
              <ul>
                <li>
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Projetos
                  </Link>
                </li>
              </ul>
            </Nav>
            <Contact>
              <p>
                Me Contate
              </p>
              <ul>
                <li>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href="https://wa.me/553491585408">
                    {iconList.whatsapp}
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href="https://www.linkedin.com/in/fabio-signorini/">
                    {iconList.linkedin}
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='mailto:fabiosgcontato@gmail.com'
                  >
                    {iconList.email}
                  </a>
                </li>
              </ul>
            </Contact>
          </>
        )}
        {showMenuMobile && !openMenu && (
          <>
            <BtnMenuHambuguer
              onClick={(e) => toggleMenuMobile(e)}
            >{iconList.menuHamburger}</BtnMenuHambuguer>
          </>
        )}

        <NavMobile menuopen={openMenu}>
          <Logo />
          <NavListMobile>
            <li>
              <a href="#!">Início</a>
            </li>
            <li>
              <a href="#!">Sobre</a>
            </li>
            <li>
              <a href="#!">Projetos</a>
            </li>
            <li>
              <a href="#!">Contato</a>
            </li>
          </NavListMobile>

          <Contact>
            <p>Me Contate</p>
            <ul>
              <li>
                <a href="#!">
                  {iconList.whatsapp}
                </a>
              </li>
              <li>
                <a href="#!">
                  {iconList.instagram}
                </a>
              </li>
              <li>
                <a href="#!">
                  {iconList.email}
                </a>
              </li>
            </ul>
          </Contact>
          <BtnMenuClose onClick={(e) => toggleMenuMobile(e)}>{iconList.closeX}</BtnMenuClose>
        </NavMobile>
      </NavContainer>
    </Wrapper>
  )
}
