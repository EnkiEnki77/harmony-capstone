import React from 'react'
import Button from '../components/button/Button'
import Header from '../components/header/Header'
import { LandingContainer } from '../components/pageStyles/Landing.styles'

const Landing = () => {
  return (
    <LandingContainer>
      <Header/>
      <Button text = 'Sign In with Spotify' buttonAlt = {true}/>
    </LandingContainer>
  )
}

export default Landing
