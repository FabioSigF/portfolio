import React from 'react'
import { Content, Email, Grid, Img, Medias, Social, Wrapper } from './Contact.styles'
import { iconList } from '../../globalStyle'
import Container from '../../layout/Container/Container'
import imgFooter from '../../imgs/contact.png'

export default function Contact() {
  return (
    <Wrapper id='contact'>
      <Container>
        <Grid>
          <Img>
            <img src={imgFooter} alt="decorative" />
          </Img>
          <Content>
            <h3>Vamos trabalhar juntos!</h3>
            <p>Disciplina e sede de conhecimento são os pontos principais da minha personalidade como colaborador. Quero uma oportunidade para mostrar o meu máximo para você!</p>
          </Content>
          <Social>
            <Medias>
              <span>Contato:</span>
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
            </Medias>
            <Email>
              <span>Email: </span>
              <a href="mailto:fabiosgcontato@gmail.com">
                fabiosgcontato@gmail.com
              </a>
            </Email>
          </Social>
        </Grid>
      </Container>
    </Wrapper>
  )
}
