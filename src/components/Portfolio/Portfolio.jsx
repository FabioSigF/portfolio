import React from 'react'
import { SectionTitle, iconList } from '../../globalStyle'
import { Projects, ProjectsItem, ProjectsList, Subtitle, Wrapper } from './Portfolio.styles'
import Container from '../../layout/Container/Container'
import Project from '../Project/Project'

import autoHive from '../../imgs/autoHiveFull.png'
import netflix from '../../imgs/netflixfull.png'
import blog from '../../imgs/blogfull.png'

import reactlogo from '../../imgs/React-icon.png';
import firebaselogo from '../../imgs/firebaselogo.png'
import styledcomplogo from '../../imgs/styled-components-logo.png'
import sasslogo from '../../imgs/sass-logo.png'
import apilogo from '../../imgs/apilogo.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const projects = [
  {
    title: "Auto Hive Cars",
    icon: iconList.colorCar,
    description: "Um site de compra e venda de veículos, onde você pode criar sua conta e publicar seus anúncios.",
    features: [reactlogo, firebaselogo, styledcomplogo],
    githubLink: "https://github.com/FabioSigF/carshopping",
    liveDemoLink: "https://carshopping.vercel.app/?vercelToolbarCode=XqbEx3TGphqyKo4",
    image: autoHive,
    id: 1,
  },
  {
    title: "Netflix Clone",
    icon: iconList.colorFilmReel,
    description: "Um site clone do Netflix, possui as principais funcionalides de apresentação do conteúdo streaming. Você pode criar sua conta, personalizar seu perfil e adicionar seus filmes favoritos à 'Minha Lista' para assitir mais tarde! Usa como API o TMDB.",
    features: [reactlogo, firebaselogo, sasslogo, apilogo],
    githubLink: "https://github.com/FabioSigF/netflix_clone",
    liveDemoLink: "https://netflix-clone-sepia-xi.vercel.app/?vercelToolbarCode=Vclzu95GZlI2TCx",
    image: netflix,
    id: 2,
  },
  {
    title: "Travel Blog",
    icon: iconList.colorGlobe,
    description: "Um blog com conteúdo de viagens e aventuras, onde qualquer usuário pode criar uma conta e postar suas experiências.",
    features: [reactlogo, firebaselogo, styledcomplogo],
    githubLink: "https://github.com/FabioSigF/travelblog",
    liveDemoLink: "https://travelblog-lyart.vercel.app/?vercelToolbarCode=akk8reYXqAIKsH4",
    image: blog,
    id: 3,
  },
  {
    title: "Auto Hive Cars",
    icon: iconList.colorCar,
    description: "Um site de compra e venda de veículos, onde você pode criar sua conta e publicar seus anúncios. Possui sistema de login, registro, e todo o sistema de CRUD para anúncios de veículos.",
    features: [reactlogo, firebaselogo, styledcomplogo],
    githubLink: "https://github.com/FabioSigF/carshopping",
    liveDemoLink: "https://carshopping.vercel.app/?vercelToolbarCode=XqbEx3TGphqyKo4",
    image: autoHive,
    id: 4,
  },
  {
    title: "Netflix Clone",
    icon: iconList.colorFilmReel,
    description: "Um site clone do Netflix, possui as principais funcionalides de apresentação do conteúdo streaming. Você pode criar sua conta, personalizar seu perfil e adicionar seus filmes favoritos à 'Minha Lista' para assitir mais tarde! Usa como API o TMDB.",
    features: [reactlogo, firebaselogo, sasslogo, apilogo],
    githubLink: "https://github.com/FabioSigF/netflix_clone",
    liveDemoLink: "https://netflix-clone-sepia-xi.vercel.app/?vercelToolbarCode=Vclzu95GZlI2TCx",
    image: netflix,
    id: 5,
  },
  {
    title: "Travel Blog",
    icon: iconList.colorGlobe,
    description: "Um blog com conteúdo de viagens e aventuras, onde qualquer usuário pode criar uma conta e postar suas experiências.",
    features: [reactlogo, firebaselogo, styledcomplogo],
    githubLink: "https://github.com/FabioSigF/travelblog",
    liveDemoLink: "https://travelblog-lyart.vercel.app/?vercelToolbarCode=akk8reYXqAIKsH4",
    image: blog,
    id: 6,
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
            <Swiper
              slidesPerView={2.5}
              loop={true}
              spaceBetween={60}
              pagination={{
                clickable: true,
              }}
              centeredSlides={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {projects.map((item, key) => (
                <SwiperSlide>
                  <ProjectsItem key={key}>
                    <Project
                      title={item.title}
                      icon={item.icon}
                      description={item.description}
                      features={item.features}
                      githubLink={item.githubLink}
                      liveDemoLink={item.liveDemoLink}
                      image={item.image}
                    />
                  </ProjectsItem>
                </SwiperSlide>
              ))}
            </Swiper>
          </ProjectsList>
        </Projects>
      </Container>
    </Wrapper>
  )
}
