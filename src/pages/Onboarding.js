import React from "react";
import Header from "../components/Header/Header";
import {
  OnboardBackground,
  Overlay,
  OnboardContent,
  OnboardHeader,
  OnboardingContainer,
  OnboardMessage,
} from "../components/PageStyles/Onboarding.styles.js";
import ZipSearch from "../components/ZipSearch/ZipSearch";
import OnboardImg from "../images/unsplash_2rxgWHby5mo.png";
import overlayImg from "../images/Gradient.png";

const Onboarding = () => {
  return (
    <OnboardingContainer>
      <Header onboard={true} />
      <Overlay overlay={overlayImg}></Overlay>
      <OnboardBackground src={OnboardImg} alt="Onboarding background" />
      <OnboardContent>
        <OnboardHeader>Almost there...</OnboardHeader>
        <OnboardMessage>
          Before we can bring you face to face with your favorite artists, we’re
          going to need to know your location
        </OnboardMessage>
        <ZipSearch onboard={true} />
      </OnboardContent>
    </OnboardingContainer>
  );
};

export default Onboarding;
