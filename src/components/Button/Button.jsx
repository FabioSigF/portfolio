import React from 'react'
import { Wrapper } from './Button.styles'

export default function Button({children, to}) {
  return (
    <Wrapper href={to}>
      
      {children}
    </Wrapper>
  )
}
