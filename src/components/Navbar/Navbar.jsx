import React from 'react'
import Logo from '../Logo/Logo'
import { NavLink } from 'react-router-dom'

//STYLES
import { Container, iconList } from '../../globalStyle'
import { Contact, Nav, Wrapper } from './Navbar.styles'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Navbar() {

  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    function scrollPosition(){
      if(window.scrollY > 10)
      {
        setChangeColor(true);
      }
      else
      {
        setChangeColor(false);
      }
    }
    window.addEventListener('scroll', scrollPosition);
  }, []);
  return (
    <Wrapper className={changeColor ? "header_scroll" : ''}>
      <Container>
        <Logo />
        <Nav>
          <ul>
            <li>
              <NavLink to="/">
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                Projetos
              </NavLink>
            </li>
          </ul>
        </Nav>
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
      </Container>
    </Wrapper>
  )
}
