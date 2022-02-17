import styled from "styled-components";

export const OnboardingContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const OnboardBackground = styled.img`
  z-index: -999;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Overlay = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  background: url(${(props) => props.overlay}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.8;
`;

export const OnboardContent = styled.div`
  padding-top: 110px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 10% 10%;
`;

export const OnboardHeader = styled.h1`
  font-size: 60px;
  color: #ffffff;
  margin-bottom: 16px;
`;

export const OnboardMessage = styled.p`
  width: 590px;
  text-align: center;
  font-size: 18px;
  margin-bottom: 48px;
  margin-top: 0;
  color: #ffffff;
  opacity: 0.8;
`;
