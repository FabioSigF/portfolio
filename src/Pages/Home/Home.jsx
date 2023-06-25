import React from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Portfolio from '../../components/Portfolio/Portfolio';

import { Wrapper } from './Home.styles'
export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <About />
      <Portfolio />
    </Wrapper>
  )
}
