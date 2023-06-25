import React from 'react'
import { Container } from '../../globalStyle'
import { Content, Copyright, Wrapper } from './Footer.styles'

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Content>

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
