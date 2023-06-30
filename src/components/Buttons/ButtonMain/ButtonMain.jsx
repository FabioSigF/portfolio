import React from 'react'
import { Wrapper } from './ButtonMain.styles'

export default function Button({children, to, onClick}) {
  return (
    <Wrapper 
      href={to} 
      onClick={onClick}
    >
      {children}
    </Wrapper>
  )
}
