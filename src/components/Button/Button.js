import React from 'react'
import { StyledButton } from './Button.styles'

const Button = (props) => {
  return (
    <>
      <StyledButton buttonAlt = {props.buttonAlt} buttonAltW = {props.buttonAltW} margin= {props.margin} buttonAltH = {props.buttonAltH}>{props.text}</StyledButton>
    </>
  )
}

export default Button

