import React from 'react'
import { SectionTitle, iconList } from '../../globalStyle'
import { Projects, ProjectsItem, ProjectsList, Subtitle, Wrapper } from './Portfolio.styles'
import Container from '../../layout/Container/Container'
import Project from '../Project/Project'

import autoHive from '../../imgs/autoHive.png'
import netflix from '../../imgs/netflix.png'
import blog from '../../imgs/miniBlog.png'

const projects = [
  {
    title: "Auto Hive Cars",
    icon: iconList.colorCar,
    description: "Um site de compra e venda de veículos, onde você pode criar sua conta e publicar seus anúncios. Possui sistema de login, registro, e todo o sistema de CRUD para anúncios de veículos.",
    features: ["React JS", "Firebase","Styled Components"],
    githubLink: "https://github.com/FabioSigF/carshopping",
    liveDemoLink: "https://carshopping.vercel.app/?vercelToolbarCode=XqbEx3TGphqyKo4",
    image: autoHive,
    id: 1,
  },
  {
    title: "Netflix Clone",
    icon: iconList.colorFilmReel,
    description: "Um site clone do Netflix, possui as principais funcionalides de apresentação do conteúdo streaming. Você pode criar sua conta, personalizar seu perfil e adicionar seus filmes favoritos à 'Minha Lista' para assitir mais tarde! Usa como API o TMDB.",
    features: ["React JS", "Firebase", "Sass","API"],
    githubLink: "https://github.com/FabioSigF/netflix_clone",
    liveDemoLink: "https://netflix-clone-sepia-xi.vercel.app/?vercelToolbarCode=Vclzu95GZlI2TCx",
    image: netflix,
    id: 2,
  },
  {
    title: "Travel Blog",
    icon: iconList.colorGlobe,
    description: "Um blog com conteúdo de viagens e aventuras, onde qualquer usuário pode criar uma conta e postar suas experiências.",
    features: ["React JS", "Firebase","Styled Components"],
    githubLink: "https://github.com/FabioSigF/travelblog",
    liveDemoLink: "https://travelblog-lyart.vercel.app/?vercelToolbarCode=akk8reYXqAIKsH4",
    image: blog,
    id: 3,
  },
]

export default function Portfolio() {
  return (
    <Wrapper id="portfolio">
      <Container>
          <SectionTitle>Portfolio</SectionTitle>
          <Subtitle>Cada projeto tem seu pedacinho único...</Subtitle>
          <Projects>
            <ProjectsList>
              {projects.map((item, key) => (
                <ProjectsItem key={key}>
                  <Project 
                    title={item.title}
                    icon={item.icon}
                    description={item.description}
                    features={item.features}
                    githubLink={item.githubLink}
                    liveDemoLink={item.liveDemoLink}
                    image={item.image}
                    id={item.id}
                  />
                </ProjectsItem>
              ))}
            </ProjectsList>
          </Projects>
      </Container>
    </Wrapper>
  )
}
