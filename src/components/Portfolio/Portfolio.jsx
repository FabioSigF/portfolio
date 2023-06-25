import React from 'react'
import { Container, Header, SectionTitle } from '../../globalStyle'
import { Wrapper } from './Portfolio.styles'

export default function Portfolio() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <SectionTitle>Portfolio</SectionTitle>
          <h3>Cada projeto tem seu pedacinho único</h3>
        </Header>
        
      </Container>
    </Wrapper>
  )
}
