import React from 'react'
import { Content, Email, Grid, Medias, Social, Wheel, Wrapper } from './Contact.styles'
import { iconList } from '../../globalStyle'
import Container from '../../layout/Container/Container'
import wheel from '../../imgs/contact.png'
import ButtonMain from '../../components/Buttons/ButtonMain/ButtonMain'
export default function Contact() {
  return (
    <Wrapper>
      <Container>
        <Grid>
          <Wheel>
            <img src={wheel} alt="decorative wheel" />
          </Wheel>
          <Content>
            <h3>Vamos trabalhar juntos!</h3>
            <p>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own.</p>
          </Content>
          <ButtonMain>Contato {iconList.paperPlane}</ButtonMain>
        </Grid>
        <Grid>
          <div></div>
          <Social>
            <Email>
              <span>Email: </span>
              <a href="mailto:fabiosgcontato@gmail.com">
                fabiosgcontato@gmail.com
              </a>
            </Email>
            <Medias>
              <span>Follow me:</span>
              <ul>
                <li>
                  <a href="#!">
                    {iconList.github}
                  </a>
                </li>
                <li>
                  <a href="#!">
                    {iconList.linkedin}
                  </a>
                </li>
                <li>
                  <a href="#!">
                    {iconList.whatsapp}
                  </a>
                </li>
              </ul>
            </Medias>
          </Social>
        </Grid>
      </Container>
    </Wrapper>
  )
}
