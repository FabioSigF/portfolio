import React from 'react'
import { Wrapper } from './ButtonLink.styles'

export default function ButtonLink({to, onClick, children}) {
  return (
    <Wrapper 
      href={to}
      target='_blank'
      onClick={onClick}
      >
      {children}
    </Wrapper>
  )
}
