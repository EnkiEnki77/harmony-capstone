import React from 'react'
import { StyledButton } from './Button.styles'

const Button = (props) => {
  return (
    <>
      <StyledButton button = {props.button}>{props.text}</StyledButton>
    </>
  )
}

export default Button

