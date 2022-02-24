import React from "react";
import Button from "../Button/Button";
import {
  EventContainer,
  EventItem,
  ArtistImage,
  Date,
  Day,
  Time,
  DateTime,
  ArtInfo,
  Artist,
  Location,
  DownArrow,
} from "./Event.styles";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Event = (props) => {
  return (
    <>
      <EventContainer>
        <EventItem>
          <DownArrow icon={faAngleDown} />
          <ArtistImage src={props.artistImage} alt="Artist Image" />
          <DateTime>
            <Date>{props.date}</Date>
            <Day>{props.day} • </Day>
            <Time>{props.time} </Time>
          </DateTime>
          <ArtInfo>
            <Artist>{props.artist}</Artist>
            <Location>{props.location}</Location>
          </ArtInfo>
        </EventItem>
        <Button
          hover={true}
          land={false}
          text="See Tickets"
          buttonAltW="134px"
          buttonAltH="41px"
        />
      </EventContainer>
    </>
  );
};

export default Event;
