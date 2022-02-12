import React from 'react'
import Button from '../components/button/Button'
import Header from '../components/header/Header'
import { LandingContainer,  LandingBackground, LandingContent, LandingHeader, LandingMessage, LandingOverlay } from '../components/pageStyles/Landing.styles'
import LandingOverlayImg from '../images/Gradient.png'
import LandingImg from '../images/Landing_Hero_Image.png'


const Landing = () => {
  return (
    <LandingContainer>
      <Header/>
      <LandingOverlay overlay = {LandingOverlayImg}></LandingOverlay>
      <LandingBackground src={LandingImg} alt='Landing background'/>
      <LandingContent>
        <LandingHeader>See your favorite artists in concert</LandingHeader>
        <LandingMessage>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus leo lectus mauris accumsan turpis.</LandingMessage>
        <Button hover = {true} land = {true} text = 'Sign In with Spotify'  buttonAltW = '242px' buttonAltH = '52px'/>
      </LandingContent>
    </LandingContainer>
  )
}

export default Landing
