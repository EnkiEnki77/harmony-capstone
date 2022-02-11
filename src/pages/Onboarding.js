import React from 'react'
import Header from '../components/Header/Header'
import { OnboardingContainer } from '../components/PageStyles/Onboarding.styles'

const Onboarding = () => {
  return (
    <OnboardingContainer>
      <Header onboard={true}/>
    </OnboardingContainer>
  )
}

export default Onboarding