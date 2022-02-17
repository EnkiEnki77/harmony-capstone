import React from "react";
import Header from "../components/Header/Header.js";
import Button from "../components/Button/Button";
import {
  DashboardContainer,
  DashboardOverlay,
  DashboardBackground,
  DashBanner,
  DashTopline,
  DashMainline,
  DashSubline,
  UserLocation,
} from "../components/PageStyles/Dashboard.styles.js";
import Event from "../components/Event/Event";
import overlayImg from "../images/Gradient.png";
import DashImg from "../images/austin-neill-hgO1wFPXl3I-unsplash.jpg";

const spotifyData = [
  {
    artistImage: DashImg,
    date: "Nov 12",
    day: "Friday",
    time: "8:00PM",
    artist: "Kendrick Lamar",
    location: "Sunshine Theatre - Albuquerque, NM",
  },
  {
    artistImage: DashImg,
    date: "Nov 12",
    day: "Friday",
    time: "8:00PM",
    artist: "Kendrick Lamar",
    location: "Sunshine Theatre - Albuquerque, NM",
  },
  {
    artistImage: DashImg,
    date: "Nov 12",
    day: "Friday",
    time: "8:00PM",
    artist: "Kendrick Lamar",
    location: "Sunshine Theatre - Albuquerque, NM",
  },
];

const Dashboard = () => {
  return (
    <>
      <Header dash={true} />

      <DashboardContainer>
        <DashBanner>
          <DashboardOverlay overlay={overlayImg} />
          <DashboardBackground src={DashImg} alt="Onboarding background" />
          <DashTopline>Friday Dec 12, 2022</DashTopline>
          <DashMainline>Kendrick Lamar</DashMainline>
          <DashSubline>
            Sunshine Theater - Albuquerque, NM
            <Button
              hover={true}
              land={false}
              text="See Tickets"
              buttonAltW="134px"
              buttonAltH="41px"
            />
          </DashSubline>
        </DashBanner>
        <UserLocation>
          All Concert Events Near <span>87109</span> ({spotifyData.length})
        </UserLocation>
        {spotifyData.map((item) => {
          return (
            <Event
              artistImage={item.artistImage}
              date={item.date}
              day={item.day}
              time={item.time}
              artist={item.artist}
              location={item.location}
            />
          );
        })}
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
