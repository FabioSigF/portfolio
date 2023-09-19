import React from "react";
import { SectionTitle, iconList } from "../../globalStyle";
import {
  Projects,
  ProjectsItem,
  ProjectsList,
  Subtitle,
  Wrapper,
} from "./Portfolio.styles";
import Container from "../../layout/Container/Container";
import Project from "../Project/Project";

import autoHive from "../../imgs/autohivebg.jpg";
import netflix from "../../imgs/netflix2.jpg";
import blog from "../../imgs/blogfull.jpg";
import sneakers from '../../imgs/sneakersbg.jpg'

const projects = [
  //   {
  //   title: "Sneakers",
  //   description:
  //     "Um blog com conteúdo de viagens e aventuras, onde qualquer usuário pode criar uma conta e postar suas experiências.",
  //   features: ["ReactJS", "MySQL", "NodeJS", "Express", "Redux", "TypeScript", "Styled Components"],
  //   githubLink: "https://github.com/FabioSigF/sneakers",
  //   liveDemoLink:
  //     "https://travelblog-lyart.vercel.app/?vercelToolbarCode=akk8reYXqAIKsH4",
  //   image: sneakers,
  //   textDark: false,
  //   id: 2,
  // },
  {
    title: "Auto Hive Cars",
    description:
      "Um site de compra e venda de veículos, onde você pode criar sua conta e publicar seus anúncios.",
    features: ["ReactJS", "Firebase", "Styled Components"],
    githubLink: "https://github.com/FabioSigF/carshopping",
    liveDemoLink:
      "https://carshopping.vercel.app/?vercelToolbarCode=XqbEx3TGphqyKo4",
    image: autoHive,
    textDark: true,
    id: 0,
  },
  {
    title: "Travel Blog",
    description:
      "Um blog com conteúdo de viagens e aventuras, onde qualquer usuário pode criar uma conta e postar suas experiências.",
    features: ["ReactJS", "Firebase", "Styled Components"],
    githubLink: "https://github.com/FabioSigF/travelblog",
    liveDemoLink:
      "https://travelblog-lyart.vercel.app/?vercelToolbarCode=akk8reYXqAIKsH4",
    image: blog,
    textDark: true,
    id: 2,
  },
  {
    title: "Netflix Clone",
    description:
      "Um site clone do Netflix, possui as principais funcionalides de apresentação do conteúdo streaming. Você pode criar sua conta, personalizar seu perfil e adicionar seus filmes favoritos à 'Minha Lista' para assitir mais tarde! Usa como API o TMDB.",
    features: ["ReactJS", "Firebase", "Sass", "API"],
    githubLink: "https://github.com/FabioSigF/netflix_clone",
    liveDemoLink:
      "https://netflix-clone-sepia-xi.vercel.app/?vercelToolbarCode=Vclzu95GZlI2TCx",
    image: netflix,
    textDark: false,
    id: 1,
  },
  

];

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
                  textdark={item.textDark}
                />
              </ProjectsItem>
            ))}
          </ProjectsList>
        </Projects>
      </Container>
    </Wrapper>
  );
}
