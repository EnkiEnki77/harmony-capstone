import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { motion } from "framer-motion"

export const EventContainer = styled(motion.div)`
  width: 57%;
  min-height: 84px;
  padding-right: 10px ;

  margin-bottom: 20px;

  padding-bottom:${props => props.toggle ? '24px' : 'none'} ;
 

  /* background-color: green; */
  display: flex;
  flex-flow: row wrap ;
 align-items: center;
 gap:0 16px  ;
 box-shadow: ${props => props.toggle ? '0px 8px 20px 0px rgba(0,0,0,0.7)' : 'none'} ;
  transition: all 0.5s ;
  border-radius: ${props => props.toggle ? '10px' : 'none'};

  button {
    margin-right: 0px ;
  }
`;

export const EventItem = styled.div`
    width: 80.5% ;
    min-height: 84px;
    display: flex;
    align-items: center;
    border-radius: ${props => props.toggle ? '10px' : 'none'};
    transition: all 0.5s;
    /* gap:3% ; */

    &:hover {
    background: #fafafa;
    cursor: pointer;
    border-radius: ${props => props.toggle ? '10px' : 'none'};
  }
`;

export const ArtistImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right:2rem ;
  border:1px solid black;
  border-radius: 50px;
`;

export const DateTimes = styled.div`
  margin-right: 5rem ;
  display: flex;
  flex-flow: column; ;
  gap:8px ;
`;

export const Date = styled.h2`
margin:0 ;
font-size: 16px;
font-weight:600;
`;

export const DayTime = styled.p`
margin:0 ;
font-size:14px;
font-weight:500 ;
`;

export const ArtInfo = styled.div`
  display: flex;
  flex-flow: column; ;
  gap:8px ;
`;

export const Artist = styled.h2`
  margin:0 ;
  font-size: 16px;
font-weight:600;
`;

export const Location = styled.p`
margin:0 ;
font-size:14px;
font-weight:500 ;
`;

export const DownArrow = styled(FontAwesomeIcon)`
  margin:0 1rem;
  transform: ${props => props.toggle ? 'rotate(-180deg)' : 'none'};
  transition: all 0.5s;
  font-size: 18px;
`;

export const Lineup = styled(motion.div)`
  flex-basis: 100% ;
  padding-left: 48px ;
  display:flex ;
  flex-flow: column; 
  gap:0 8px ;


  .something {
    margin:none ;
  }
`;

export const LineupText = styled.h2`
  font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 17px;
letter-spacing: 0.02em;
margin-bottom: 16px;
margin-top: 20px;
`;
