import React from 'react'
import { Container } from '../../globalStyle'
import { Content, Copyright, Wrapper } from './Footer.styles'
import Logo from '../Logo/Logo'

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo />
          <Copyright>
            <p>Copyright &copy; 2023. <a href='#!'>
                Fábio Signorini
              </a>
            </p>
          </Copyright>
        </Content>
      </Container>
    </Wrapper>
  )
}
