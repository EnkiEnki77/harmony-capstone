import styled from "styled-components";


export const LandingContainer  = styled.div`
   display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LandingBackground = styled.img`
  z-index: -999;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const LandingOverlay = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  background: url(${props => props.overlay}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.8;
`;

export const LandingContent  = styled.div`
  padding-top: 110px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 10% 10%;
  
`;

export const LandingHeader  = styled.h1`
  font-size: 60px;
  color: #FFFFFF;
  margin-bottom: 16px;
  max-width: 590px;
  text-align: center;
 
`;

export const LandingMessage  = styled.p`
  width: 590px;
  text-align: center;
  font-size: 18px;
  margin-bottom: 48px;
  margin-top: 0;
  color: #FFFFFF;
  opacity: 0.8;
`;

