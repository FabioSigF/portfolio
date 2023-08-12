import React from 'react'
import { Wrapper } from './ButtonLink.styles'

export default function ButtonLink({to, onClick, children, btnlight}) {
  return (
    <Wrapper 
      href={to}
      target='_blank'
      onClick={onClick}
      btnlight={btnlight}
      >
      {children}
    </Wrapper>
  )
}
