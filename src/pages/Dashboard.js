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

const Dashboard = () => {

  const [topArtists, setTopArtists] = useState('')
  const [artistEvents, setArtistEvents] = useState('')
  const [events, setEvents]= useState([]);
  let parsed = queryString.parse(window.location.search)
  let accessToken = parsed.access_token
  const ticketmasterURI = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey='
  const apiKey = 	'TnZ0TAmAIg23wmcPtZkvFbppZpp2dMxr'
  const apiSecret = 'gDy8WDgwDxA5hGD0'
  const artistItems = topArtists.items
  const artistArray = []


  
  
 console.log(artistList)


  useEffect(() => {
    async function fetchData(){
      const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
        headers: {'Authorization': 'Bearer ' + accessToken }
      })
      const json = await response.json()
      return setTopArtists(json)
    }
    fetchData();
 

      async function fetchTicket(){
        let artists = []
        console.log(artistItems);
        artistItems && await artistItems.map((artist) => artists.push(artist.name) )
        Promise.all(artists.map(async (artist) => {
          return (await axios.get(
            `https://app.ticketmaster.com/discovery/v2/events.json?apikey=TnZ0TAmAIg23wmcPtZkvFbppZpp2dMxr&keyword=${artist}`
          ).then(res => console.log(res.data._embedded.events)))
        })
        )
        
        
      
      
      }
    

      fetchTicket()
  
  }, [accessToken,events])

  console.log(artistItems)


  

   

    
     
   
   




  return (
    <DashboardContainer>
      <Header dash={true}/>
      <HeroContainer>
        <DashboardOverlay src={LandingOverlayImg}></DashboardOverlay>
        <DashboardBackground src={heroImg}></DashboardBackground>
        <HeroInfoCont>
          <HeroDate>{artistList[0].date}</HeroDate>
          <HeroArtist>{artistList[0].artist}</HeroArtist>
          <HeroVenue>{artistList[0].venue}</HeroVenue>
          <Button text='See Tickets'/>
        </HeroInfoCont>
      </HeroContainer>
      <EventContainer>
        <ConcertCount>All Concert Events Near 97322 (12)</ConcertCount>
        {artistList.map(artist => <Event artistImage = {heroImg} artist = {artist.artist} venue = {artist.venue} date = {artist.date} day= {artist.day} time={artist.time}/>)}
      </EventContainer>
    </DashboardContainer>
  )
}

export default Dashboard