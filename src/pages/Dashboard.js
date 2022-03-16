import React from 'react'
import Header from '../components/header/Header'
import { DashboardContainer, EventHead, ConcertCount, DateSort, EventContainer, HeroContainer, HeroInfoCont, HeroDate, HeroArtist, HeroVenue, DashboardBackground, DashboardOverlay } from '../components/pageStyles/Dashboard.styles'
import { useEffect } from 'react'
import { useState } from 'react'
import queryString from 'query-string'
import Event from '../components/event/Event'
import axios from 'axios'
import Button from '../components/button/Button'
import artistList from '../data/artist'
import heroImg from '../images/unsplash_hgO1wFPXl3I.png'
import LandingOverlayImg from '../images/Gradient.png'
import Footer from '../components/footer/Footer'
import LoadingPage from './LoadingPage'
import { AnimatePresence } from 'framer-motion'

const Dashboard = () => {

  const [topArtists, setTopArtists] = useState('')
  const [artistEvents, setArtistEvents] = useState('')
  const [events, setEvents]= useState([]);
  let parsed = queryString.parse(window.location.search)
  let accessToken = parsed.access_token
  let events2 = [];
  let eventsWithVenues = [];

//  console.log(topArtists.items[0].images[0])


  useEffect(() => {
    
    async function fetchData(){
      const response = await fetch('/artistapi')
      const json = await response.json() 
      console.log('artist events')
      console.log(json)
      return setArtistEvents(json)    
      // .catch((err) => err.message)
    }
    fetchData();

    async function fetchArtists(){
      const response = await fetch('/topartistapi')
      const json = await response.json() 
      console.log('artist events')
      console.log(json)
      return setTopArtists(json)    
      // .catch((err) => err.message)
    }
    fetchArtists();
  }, [])

  

  if(artistEvents){
    for(let i = 0; i < 5; i++){
      
      if(artistEvents[i]._embedded){
        events2.push(artistEvents[i]._embedded.events)
      }
    }

    // for(let i = 0; i < events2.length; i++){
    //   for(let j = 0; j < events2[i].length; j++){
    //     if(events[i][j]._embedded.venues[0].name){
    //       eventsWithVenues.push(events[i][j])
    //     }
    //   }
    // }
    
  }

  // var date = new Date(events2[0]._embedded.events[0].dates.start.dateTime);
  // let datetime = date.toString() // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"

  // var stringArray = datetime.split(/\b(\s)/);

  // let uniqueCharsHero = [];
  // stringArray.forEach((element) => {
  //   if (element !== ' ') {
  //       uniqueCharsHero.push(element);
  //   }
  // });


  // console.log(uniqueCharsHero)

  return (
    <DashboardContainer>
      {artistEvents ? [<Header dash={true}/>,
      <HeroContainer>
        <DashboardOverlay src={LandingOverlayImg}></DashboardOverlay>
        <DashboardBackground src={artistEvents && events2[0][0].images[0].url}></DashboardBackground>
        <HeroInfoCont>
          <HeroDate>Monday, Apr 18</HeroDate>
          <HeroArtist>{artistEvents && events2[0][0].name}</HeroArtist>
          <HeroVenue>{artistEvents && events2[0][3]._embedded.venues[0].name}</HeroVenue>
          <a href={artistEvents && events2[0][3].url}><Button  text='See Tickets'/></a>
        </HeroInfoCont>
      </HeroContainer>,
      <EventContainer>
        <ConcertCount>All Concert Events Near <span>97322</span> ({events2.length})</ConcertCount>
        {artistEvents && artistEvents.map((event) => {
          let events = [];
          let venue = '';

          if(event._embedded){
            events.push(event)
          }


          for(let i = 0; i < events.length; i++){
            if(events[i]._embedded.events[3]._embedded.venues[0].name){
              venue = events[i]._embedded.events[3]._embedded.venues[0].name
            }

            var date = new Date(events[i]._embedded.events[0].dates.start.dateTime);
            let datetime = date.toString() // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"

            var stringArray = datetime.split(/\b(\s)/);

            let uniqueChars = [];
            stringArray.forEach((element) => {
              if (element !== ' ') {
                  uniqueChars.push(element);
              }
            });

            console.log()
            return <Event lineup={events[i]._embedded.events[0]._embedded.attractions} href={events[i]._embedded.events[0].url} datetime = {uniqueChars} artistImage={events[i]._embedded.events[0].images[0].url} artist={events[i]._embedded.events[0].name} venue = {events[i]._embedded.events[3]._embedded.venues[0].name} />
          }
         })
        }
      </EventContainer>,
      <Footer/>]
      : <LoadingPage />}
    </DashboardContainer>
  )
}

export default Dashboard