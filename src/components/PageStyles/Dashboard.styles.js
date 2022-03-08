import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  position: relative;

`;

export const HeroContainer  = styled.div`
  width: 100%;
  height:447px ;
  position: relative;
  
`;

export const DashboardOverlay  = styled.img`
   width: 100%;
  height:447px;
  position: absolute;
  z-index:-2 ;
`;

export const DashboardBackground  = styled.img`
  width: 100%;
  height:447px;
  position: absolute;
  z-index:-3 ;
`;

export const HeroInfoCont = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 0 68px 8%;
  z-index: 13 ;
`;

export const HeroDate  = styled.p`
  color: #FFFFFF;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-align: left;
  margin:0 0 8px 0;
`;

export const HeroArtist  = styled.h2`
  color: #FFFFFF;
  font-family: Montserrat;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 73px;
  letter-spacing: 0.01em;
  text-align: left;
  margin:0 0 8px 0;
`;

export const HeroVenue  = styled.h3`
  color: #FFFFFF;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-align: left;
  margin:0 0 32px 0;
`;

export const EventContainer = styled.div`
  width: calc(100% - 6rem);
  margin: 68px 0 30px 6rem ;
  
`;

export const EventHead = styled.div`
  
`;

export const ConcertCount  = styled.h2`
  margin-bottom:16px ;
  margin-left: 1rem;
`;

export const DateSort  = styled.select`
  
`;
