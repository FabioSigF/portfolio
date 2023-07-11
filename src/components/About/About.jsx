import React from 'react'
import { iconList, SectionTitle } from '../../globalStyle'
import { Description, SkillCard, SkillHeader, SkillsList, Wrapper } from './About.styles'
import Container from '../../layout/Container/Container'

export default function About() {
  return (
    <Wrapper>
      <Container>
        <SectionTitle light>
          Um pouco sobre mim...
        </SectionTitle>
        <Description>
          Ajudo clientes a contarem sua história através de uma bela experiência.
          <p>Eu sou <strong>Fábio Signorini</strong>, um <strong>Desenvolvedor FullStack</strong> e estudante de <strong>Ciência da Computação</strong> na Universidade Federal de Uberlândia. </p>
          <p>Tenho conhecimento em todas as etapas de construção de sites, com ênfase em <strong>ReactJS</strong>. Aqui estão algumas skills:</p>
        </Description>
        <div>
          <SkillsList>
            <SkillCard>
              <SkillHeader>
                {iconList.computer}
                <h3>FrontEnd Developer</h3>
              </SkillHeader>
              <ul>
                <li>{iconList.check} HTML
                  <p>Avançado</p>
                </li>
                <li>{iconList.check} ReactJS
                  <p>Avançado</p>
                </li>
                <li>{iconList.check} CSS
                  <p>Avançado</p>
                </li>
                <li>{iconList.check} SCSS
                  <p>Avançado</p>
                </li>
                <li>{iconList.check} Javascript
                  <p>Avançado</p>
                </li>
                <li>{iconList.check} Styled Comp
                  <p>Avançado</p>
                </li>
                <li>{iconList.check} Git
                  <p>Intermediário</p>
                </li>
              </ul>
            </SkillCard>
            <SkillCard>
              <SkillHeader>
                {iconList.network}
                <h3>BackEnd Developer</h3>
              </SkillHeader>
              <ul>
                <li>{iconList.check} Firebase
                  <p>Intermediário</p>
                </li>
                <li>{iconList.check} Javascript
                  <p>Avançado</p>
                </li>
                <li>{iconList.check} MongoDB
                  <p>Intermediário</p>
                </li>

              </ul>
            </SkillCard>
            <SkillCard>
              <SkillHeader>
                {iconList.book}
                <h3>Complementar</h3>
              </SkillHeader>
              <ul>
                <li style={{ width: '100%' }}>{iconList.check} Inglês
                  <p>Avançado</p>
                </li>
                <li style={{ width: '100%' }}>{iconList.check} Acessibilidade Web
                  <p>Intermediário</p>
                </li>
                <li style={{ width: '100%' }}>{iconList.check} Arquitetura Mobile First
                  <p>Avançado</p>
                </li>
                <li style={{ width: '100%' }}>{iconList.check} Linguagem C/C++
                  <p>Intermediário</p>
                </li>
              </ul>
            </SkillCard>
          </SkillsList>
        </div>
      </Container>
    </Wrapper>
  )
}
