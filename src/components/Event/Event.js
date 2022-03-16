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
  DateTimes,
  ArtInfo,
  Artist,
  Location,
  DownArrow,
  DayTime,
  Lineup
} from "./Event.styles";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import LineupArtists from "../LineupArtist/LineupArtists";
import { DateTime }  from "luxon";



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

  let ampm = ''
    if(parseInt(props.datetime[4]) > 12 ){
        ampm = 'PM'
    }else if(parseInt(props.datetime[4]) < 12 ){
      ampm = 'AM'
    }

  function convert(input) {
    

    console.log(ampm)
    return DateTime.fromFormat(input, 'HH:mm:ss').toFormat(`h:mm `);
}

let time = convert(props.datetime[4])

  console.log(parseInt(props.datetime[4]))
  return (
    <>
      <EventContainer  toggle={toggle} >
        <EventItem onClick={handleDropdown} toggle={toggle}>
          <DownArrow icon={faAngleDown} toggle={toggle}/>
          <ArtistImage src={props.artistImage} alt="Artist Image" />
          <DateTimes>
            <Date>{props.datetime[1] + ' ' + props.datetime[2]}</Date>
            <DayTime>{`${props.datetime[0]} • ${time}${ampm}`}</DayTime>
          </DateTimes>
          <ArtInfo>
            <Artist>{props.artist}</Artist>
            <Location>{props.venue}</Location>
          </ArtInfo>
        </EventItem>
        <a href={props.href} target="_blank" rel="noreferrer">
          <Button
            hover={true}
            land={false}
            text="See Tickets"
            buttonAltW="134px"
            buttonAltH="41px"
          />
        </a>
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
