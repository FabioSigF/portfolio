import React from 'react'
import { Wrapper } from './ButtonLink.styles'

export default function ButtonLink({to, onClick, children}) {
  return (
    <Wrapper 
      to={to}
      onClick={onClick}
      >
      {children}
    </Wrapper>
  )
}
