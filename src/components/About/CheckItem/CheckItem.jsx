import React from 'react'
import { iconList } from '../../../globalStyle'
import { Wrapper } from './CheckItem.styles'

function CheckItem({label, fullWidth}) {
  return (
    <Wrapper
      style={{width: `${fullWidth ? '100%' : ''}`}}
    ><p>{iconList.check} {label}</p></Wrapper>
  )
}

export default CheckItem