import React, { useState } from "react";
import Button from "../button/Button";
import {AnimatePresence, motion} from 'framer-motion'
import {
  EventContainer,
  EventItem,
  ArtistImage,
  Date,
  Day,
  Time,
  LineupText,
  DateTime,
  ArtInfo,
  Artist,
  Location,
  DownArrow,
  DayTime,
  Lineup
} from "./Event.styles";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import LineupArtists from "../LineupArtist/LineupArtists"



const Event = (props) => {
  const [toggle, setToggle] = useState(false)

  const handleDropdown = () => {
    setToggle(!toggle)
  }

  const handleMouseLeave = () => {
    if(toggle){
      setToggle(false)
    }
  }

  const dropdown = {open: {opacity: 1}}

  const variants = {
    open: {  opacity: 1, height: 'auto', borderRadius:'20px'},
    closed: {  opacity: 0, height: 0},
    
  }

  console.log(toggle)
  return (
    <>
      <EventContainer onMouseLeave={handleMouseLeave} toggle={toggle} >
        <EventItem onClick={handleDropdown} toggle={toggle}>
          <DownArrow icon={faAngleDown} toggle={toggle}/>
          <ArtistImage src={props.artistImage} alt="Artist Image" />
          <DateTime>
            <Date>NOV 12</Date>
            <DayTime>Friday • 8:00pm </DayTime>
          </DateTime>
          <ArtInfo>
            <Artist>{props.artist}</Artist>
            <Location>{props.venue}</Location>
          </ArtInfo>
        </EventItem>
        <Button
          hover={true}
          land={false}
          text="See Tickets"
          buttonAltW="134px"
          buttonAltH="41px"
        />
         <AnimatePresence>
        {toggle && 
            <Lineup   
            variants={variants}
            style={{overflow: "hidden"}}
            initial='closed' 
            animate='open'
            exit='closed'
            transition={{duration: 0.5, times: [0, 0.5, 0.7, 1]}}>
              <LineupText>Lineup</LineupText>
              <LineupArtists/>
              <LineupArtists/>
              <LineupArtists/>
              <LineupArtists/>
              <LineupArtists/>
            </Lineup>
          }</AnimatePresence>
      </EventContainer>
    </>
  );
};

export default Event;
