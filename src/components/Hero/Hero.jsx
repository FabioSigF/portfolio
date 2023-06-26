import React from 'react'
import imgHero from '../../imgs/hero4.jpg'

//Style
import { Container, iconList } from '../../globalStyle'
import { Content, Description, Header, Image, Introduction, Social, Text, Title, Wrapper } from './Hero.styles'
import Button from '../Button/Button'


export default function Hero() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Description>
            <Introduction>
              <Header>
                <p>
                  Oi, eu sou o<h1>Fábio Signorini</h1>
                </p>
                <Social>
                  <li>
                    <a href="#!">
                      {iconList.linkedin}
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      {iconList.github}
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      {iconList.document}
                    </a>
                  </li>
                </Social>
              </Header>
              <Title>
                <h2>Front End Developer</h2>
                <h2>Front End Developer</h2>
              </Title>
              <Text>
                <p>
                  Tenho 22 anos, sou Desenvolvedor FrontEnd. Adoro React JS!
                </p>
                <p>Estudo Ciência da Computação na Universidade Federal de Uberlândia</p>
              </Text>
            </Introduction>
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
