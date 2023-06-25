import React from 'react'
import Logo from '../Logo/Logo'
import { NavLink } from 'react-router-dom'

//STYLES
import { Container, iconList } from '../../globalStyle'
import { Contact, Nav, Wrapper } from './Navbar.styles'

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  )
}
