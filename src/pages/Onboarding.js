import React from 'react'
import Header from '../components/header/Header'
import { OnboardBackground, Overlay, OnboardContent, OnboardHeader, OnboardingContainer, OnboardMessage } from '../components/pageStyles/Onboarding.styles'
import ZipSearch from '../components/zipSearch/ZipSearch'
import OnboardImg from '../images/unsplash_2rxgWHby5mo.png'
import overlayImg from '../images/Gradient.png'
import { useEffect } from 'react'
import { useState } from 'react'
import queryString from 'query-string'

const Onboarding = () => {
  const [user, setUser] = useState([])
  let parsed = queryString.parse(window.location.search)
  let accessToken = parsed.access_token
  console.log(accessToken)

  useEffect(() => {
   (async function fetchData(){
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {'Authorization': 'Bearer ' + accessToken }
      })
      const json = await response.json()
      return setUser(json)
    })()
  }, [accessToken])

  return (
    <OnboardingContainer>
      <Header onboard={true}/>
      <Overlay overlay = {overlayImg}></Overlay>
      <OnboardBackground src={OnboardImg} alt='Onboarding background'/>
      <OnboardContent>
        <OnboardHeader>Almost there...</OnboardHeader>
        <OnboardMessage>Before we can bring you face to face with your favorite artists, we’re going to need to know your location</OnboardMessage>
         {user && <ZipSearch accessToken = {accessToken} image = {user.images}  email = {user.email} onboard ={true}/>}
      </OnboardContent>
    </OnboardingContainer>
  )
}

export default Onboarding