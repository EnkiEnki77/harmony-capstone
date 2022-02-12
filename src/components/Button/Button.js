import React from 'react'
import { StyledButton, SpotifyIcon } from './Button.styles'


const Button = (props) => {
  return (
    <>
      <StyledButton buttonAlt2 = {props.buttonAlt2} buttonAlt = {props.buttonAlt} hover = {props.hover} buttonAltW = {props.buttonAltW} margin= {props.margin} buttonAltH = {props.buttonAltH}>{props.text} {props.land && <SpotifyIcon/>}</StyledButton>
    </>
  )
}

export default Button

