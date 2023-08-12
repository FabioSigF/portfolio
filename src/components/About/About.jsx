import React from 'react'
import { iconList, SectionTitle } from '../../globalStyle'
import { Description, SkillCard, SkillHeader, SkillsList, Wrapper } from './About.styles'
import Container from '../../layout/Container/Container'
import CheckItem from './CheckItem/CheckItem'

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
                <CheckItem label={"HTML"} />
                <CheckItem label={"ReactJS"} />
                <CheckItem label={"CSS"} />
                <CheckItem label={"Sass"} />
                <CheckItem label={"JavaScript"} />
                <CheckItem label={"Styled Comp"} />
                <CheckItem label={"Git"} />
              </ul>
            </SkillCard>
            <SkillCard>
              <SkillHeader>
                {iconList.network}
                <h3>BackEnd Developer</h3>
              </SkillHeader>
              <ul>
                <CheckItem label={"MySQL"} />
                <CheckItem label={"Firebase"} />
                <CheckItem label={"JavaScript"} />
                <CheckItem label={"MongoDB"} />
                <CheckItem label={"Postman API"} />
                <CheckItem label={"Express"} />
              </ul>
            </SkillCard>
            <SkillCard>
              <SkillHeader>
                {iconList.book}
                <h3>Complementar</h3>
              </SkillHeader>
              <ul>
                <CheckItem fullWidth label={"Inglês"} />
                <CheckItem fullWidth label={"Acessibilidade Web"} />
                <CheckItem fullWidth label={"Arquitetura Mobile First"} />
              </ul>
            </SkillCard>
          </SkillsList>
        </div>
      </Container>
    </Wrapper>
  )
}
