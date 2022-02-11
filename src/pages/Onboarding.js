import React from 'react'
import Header from '../components/header/Header'
import { OnboardingContainer } from '../components/pageStyles/Onboarding.styles'

const Onboarding = () => {
  return (
    <OnboardingContainer>
      <Header onboard={true}/>
      
    </OnboardingContainer>
  )
}

export default Onboarding