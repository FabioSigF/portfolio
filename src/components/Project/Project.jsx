import React from 'react'
import { Buttons, Description, Features, Image, Text, Title, Wrapper } from './Project.styles'
import ButtonLink from '../Buttons/ButtonLink/ButtonLink'
import { iconList } from '../../globalStyle'

export default function Project({ image, title, description, features, githubLink, liveDemoLink, id}) {
  
  return (
    <Wrapper className={id % 2 === 0 && "reverse"}>
      <Image src={image}/>
      <Description>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <Features>
          {features.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </Features>
        <Buttons>
          <ButtonLink to={githubLink}>Code {iconList.github}</ButtonLink>
          <ButtonLink to={liveDemoLink}>Live Demo {iconList.share}</ButtonLink>
        </Buttons>
      </Description>
    </Wrapper>
  )
}
