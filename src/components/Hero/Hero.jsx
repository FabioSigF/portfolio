import React from 'react'
import imgHero from '../../imgs/hero.png'

//Style
import { iconList } from '../../globalStyle'
import { Buttons, Content, Description, Header, Image, Introduction, Social, Subtitle, Text, Title, Wrapper } from './Hero.styles'
import Container from '../../layout/Container/Container'
import ButtonMain from '../Buttons/ButtonMain/ButtonMain'
import TypeIt from 'typeit-react'
import ButtonLink from '../Buttons/ButtonLink/ButtonLink'
import { Link } from 'react-scroll'

export default function Hero() {

  return (
    <Wrapper id="hero">
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
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <ButtonMain>
                  Contato {iconList.paperPlane}
                </ButtonMain>
              </Link>
              <ButtonLink>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projetos {iconList.book}
                </Link>
              </ButtonLink>
            </Buttons>
            <Social>
              <ul>
                <li>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href="https://github.com/FabioSigF">{iconList.github}</a>
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
                    href="https://wa.me/553491585408">
                    {iconList.whatsapp}
                  </a>
                </li>
              </ul>
            </Social>
          </Description>
          <Image src={imgHero} alt="Programador" />
        </Content>
      </Container>
    </Wrapper>
  )
}
