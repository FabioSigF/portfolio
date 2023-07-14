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
                </li>
                <li><p>{iconList.check} ReactJS</p>
                </li>
                <li><p>{iconList.check} CSS</p>
                </li>
                <li><p>{iconList.check} Sass</p>
                </li>
                <li><p>{iconList.check} JavaScript</p>
                </li>
                <li><p>{iconList.check} Styled Comp</p>
                </li>
                <li><p>{iconList.check} Git</p>
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
                </li>
                <li><p>{iconList.check} JavaScript</p>
                </li>
                <li>
                  <p>{iconList.check} MongoDB</p>
                </li>
                <li>
                  <p>{iconList.check} Postman API</p>
                </li>
                <li>
                  <p>{iconList.check} Express</p>
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
                </li>
                <li style={{ width: '100%' }}><p>{iconList.check} Acessibilidade Web</p>
                </li>
                <li style={{ width: '100%' }}><p>{iconList.check} Arquitetura Mobile </p>First
                </li>
                <li style={{ width: '100%' }}><p>{iconList.check} Linguagem C/C++</p>
                </li>
              </ul>
            </SkillCard>
          </SkillsList>
        </div>
      </Container>
    </Wrapper>
  )
}
