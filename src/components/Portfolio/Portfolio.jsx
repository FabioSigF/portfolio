import React from 'react'
import { Container, SectionTitle } from '../../globalStyle'
import { Projects, Subtitle, Wrapper } from './Portfolio.styles'
import Project from '../Project/Project'

import autoHive from '../../imgs/autoHive.png'

const projects = [
  {
    title: "Auto Hive Cars",
    description: "Um site de compra e venda de veículos, onde você pode criar sua conta e publicar seus anúncios. Possui sistema de login, registro, e todo o sistema de CRUD para anúncios de veículos.",
    features: ["React", "Firebase","Styled Components"],
    githubLink: "#!",
    liveDemoLink: "#!",
    image: autoHive,
    id: 1,
  },
  {
    title: "Netflix Clone",
    description: "Um site clone do Netflix, possui as principais funcionalides de apresentação do conteúdo streaming. Usa como API o TMDB.",
    features: ["React", "Firebase", "API"],
    githubLink: "#!",
    liveDemoLink: "#!",
    image: autoHive,
    id: 2,
  },
  {
    title: "Auto Hive Cars",
    description: "Um site de compra e venda de veículos, onde você pode criar sua conta e publicar seus anúncios. Possui sistema de login, registro, e todo o sistema de CRUD para anúncios de veículos.",
    features: ["React", "Firebase","Styled Components"],
    githubLink: "#!",
    liveDemoLink: "#!",
    image: autoHive,
    id: 3,
  },
  {
    title: "Netflix Clone",
    description: "Um site clone do Netflix, possui as principais funcionalides de apresentação do conteúdo streaming. Usa como API o TMDB.",
    features: ["React", "Firebase", "API"],
    githubLink: "#!",
    liveDemoLink: "#!",
    image: autoHive,
    id: 4,
  },
]

export default function Portfolio() {
  return (
    <Wrapper>
      <Container>
          <SectionTitle>Portfolio</SectionTitle>
          <Subtitle>Cada projeto tem seu pedacinho único...</Subtitle>
          <Projects>
            <ul>
              {projects.map((item, key) => (
                <li key={key}>
                  <Project 
                    title={item.title}
                    description={item.description}
                    features={item.features}
                    githubLink={item.githubLink}
                    liveDemoLink={item.liveDemoLink}
                    image={item.image}
                    id={item.id}
                  />
                </li>
              ))}
            </ul>
          </Projects>
      </Container>
    </Wrapper>
  )
}
