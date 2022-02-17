import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button/Button'
import Header from '../components/header/Header'
import { LandingContainer,  LandingBackground, LandingContent, LandingHeader, LandingMessage, LandingOverlay } from '../components/pageStyles/Landing.styles'
import LandingOverlayImg from '../images/Gradient.png'
import LandingImg from '../images/Landing_Hero_Image.png'



const Landing = () => {
const [login, setLogin] = useState('')

// useEffect(() => {
//   fetch('/api')
//   .then(res => res.json())
//   .then(json => console.log(json))
// }
// ,[])



  return (
    <LandingContainer>
      <Header/>
      <LandingOverlay overlay = {LandingOverlayImg}></LandingOverlay>
      <LandingBackground src={LandingImg} alt='Landing background'/>
      <LandingContent>
        <LandingHeader>See your favorite artists in concert</LandingHeader>
        <LandingMessage>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus leo lectus mauris accumsan turpis.</LandingMessage>
        <a href='http://localhost:3001/login'>
          <Button  hover = {true} land = {true} text = 'Sign In with Spotify'  buttonAltW = '242px' buttonAltH = '52px'/>
        </a>
      </LandingContent>
    </LandingContainer>
  )
}

export default Landing
