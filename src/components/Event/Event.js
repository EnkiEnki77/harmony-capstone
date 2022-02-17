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
} from "./Event.styles";

const Event = (props) => {
  return (
    <>
      <EventContainer>
        <EventItem>
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
          <Button
            hover={true}
            land={false}
            text="See Tickets"
            buttonAltW="134px"
            buttonAltH="41px"
          />
        </EventItem>
      </EventContainer>
    </>
  );
};

export default Event;
