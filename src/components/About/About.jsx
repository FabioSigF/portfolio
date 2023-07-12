import React from 'react'
import { iconList, SectionTitle } from '../../globalStyle'
import { Description, SkillCard, SkillHeader, SkillsList, Wrapper } from './About.styles'
import Container from '../../layout/Container/Container'

export default function About() {
  return (
    <Wrapper id="about">
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
                <li>
                  <p>
                  {iconList.check} HTML
                  </p>
                  <span>Avançado</span>
                </li>
                <li><p>{iconList.check} ReactJS</p>
                  <span>Avançado</span>
                </li>
                <li><p>{iconList.check} CSS</p>
                  <span>Avançado</span>
                </li>
                <li><p>{iconList.check} SCSS</p>
                  <span>Avançado</span>
                </li>
                <li><p>{iconList.check} Javascript</p>
                  <span>Avançado</span>
                </li>
                <li><p>{iconList.check} Styled Comp</p>
                  <span>Avançado</span>
                </li>
                <li><p>{iconList.check} Git</p>
                  <span>Intermediário</span>
                </li>
              </ul>
            </SkillCard>
            <SkillCard>
              <SkillHeader>
                {iconList.network}
                <h3>BackEnd Developer</h3>
              </SkillHeader>
              <ul>
                <li><p>{iconList.check} Firebase</p>
                  <span>Intermediário</span>
                </li>
                <li><p>{iconList.check} Javascript</p>
                  <span>Avançado</span>
                </li>
                <li><p>{iconList.check} MongoDB</p>
                  <span>Intermediário</span>
                </li>

              </ul>
            </SkillCard>
            <SkillCard>
              <SkillHeader>
                {iconList.book}
                <h3>Complementar</h3>
              </SkillHeader>
              <ul>
                <li style={{ width: '100%' }}><p>{iconList.check} Inglês</p>
                  <span>Avançado</span>
                </li>
                <li style={{ width: '100%' }}><p>{iconList.check} Acessibilidade Web</p>
                  <span>Intermediário</span>
                </li>
                <li style={{ width: '100%' }}><p>{iconList.check} Arquitetura Mobile </p>First
                  <span>Avançado</span>
                </li>
                <li style={{ width: '100%' }}><p>{iconList.check} Linguagem C/C++</p>
                  <span>Intermediário</span>
                </li>
              </ul>
            </SkillCard>
          </SkillsList>
        </div>
      </Container>
    </Wrapper>
  )
}
