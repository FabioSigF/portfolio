import React from 'react'
import imgHero from '../../imgs/hero.png'

//Style
import { iconList } from '../../globalStyle'
import { Buttons, Content, Description, Header, Image, Introduction, MouseDown, Social, Subtitle, Text, Title, Wrapper } from './Hero.styles'
import Container from '../../layout/Container/Container'
import ButtonMain from '../Buttons/ButtonMain/ButtonMain'
import TypeIt from 'typeit-react'
import ButtonLink from '../Buttons/ButtonLink/ButtonLink'


export default function Hero() {

  return (
    <Wrapper>
      <Container>
        <Content>
          <Description>
            <Introduction>
              <Header>
                <Title>
                  Fábio Signorini
                </Title>
                <Subtitle>
                  Desenvolvedor
                  <TypeIt
                    options={{ loop: true }}
                    getBeforeInit={(instance) => {
                      instance
                        .type("Front End").pause(650).delete(9).pause(500)
                        .type(" React JS").pause(650).delete(8).pause(500)
                        .type("JavaScript").pause(650).delete(8).pause(500);
                      return instance;
                    }}>
                  </TypeIt>
                </Subtitle>
              </Header>
              <Text>
                <p>
                  Eu tenho 22 anos, sou apaixonado com Front End e estudo Ciência da Computação na Universidade Federal de Uberlândia.</p>
              </Text>
            </Introduction>
            <Buttons>
              <ButtonMain to={"#!"}>
                Contato {iconList.paperPlane}
              </ButtonMain>
              <ButtonLink>
                Projetos {iconList.book}
              </ButtonLink>
            </Buttons>
            <Social>
              <ul>
                <li>
                  <a href="#!">{iconList.github}</a>
                </li>
                <li>
                  <a href="#!">{iconList.linkedin}</a>
                </li>
                <li>
                  <a href="#!">{iconList.whatsapp}</a>
                </li>
                <li>
                  <a href="#!">{iconList.document}</a>
                </li>
              </ul>
            </Social>
          </Description>
          <Image src={imgHero} alt="Programador" />
        </Content>
        <MouseDown />
      </Container>
    </Wrapper>
  )
}
