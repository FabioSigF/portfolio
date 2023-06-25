import React from 'react'
import imgHero from '../../imgs/hero4.jpg'

//Style
import { Container, iconList } from '../../globalStyle'
import { Content, Description, Image, Introduction, Subtitle, Text, Wrapper } from './Hero.styles'
import Button from '../Button/Button'

export default function Hero() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Description>
            <Introduction>
              <h2>Olá, eu sou </h2>
              <h1>Fábio Signorini</h1>
              <span>FullStack Developer</span>
            </Introduction>
            <Text>
              Um desenvolvedor FullStack apaixonado pelo que faz:
              <ul>
                <li>Contruir sites</li> <li>Transformar marcas em experiência</li>
              </ul>
            </Text>
            <Button to={"#!"}>
              Contato
            </Button>
          </Description>
          <Image src={imgHero} alt="Programador" />
        </Content>
      </Container>
    </Wrapper>
  )
}
