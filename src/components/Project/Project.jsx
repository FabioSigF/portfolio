import React from 'react'
import { Buttons, Description, Features, Text, Title, Wrapper } from './Project.styles'
import ButtonLink from '../Buttons/ButtonLink/ButtonLink'
import { iconList } from '../../globalStyle'

export default function Project({ image, title, description, features, githubLink, liveDemoLink}) {
  
  return (
    <Wrapper style={{
      backgroundImage: `url(${image})`
    }} className='project'>
      <Description className='project__description'>
        <Title>{title}</Title>
        <Features>
          {features.map((item, key) => (
            <img key={key} src={item} alt={title}/>
          ))}
        </Features>
        <Buttons>
          <ButtonLink btnlight to={githubLink}>Code {iconList.github}</ButtonLink>
          <ButtonLink btnlight to={liveDemoLink}>Live Demo {iconList.share}</ButtonLink>
        </Buttons>
      </Description>
    </Wrapper>
  )
}
