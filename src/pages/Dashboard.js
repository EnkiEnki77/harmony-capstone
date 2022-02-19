import React from 'react'
import Header from '../components/header/Header'
import { DashboardContainer } from '../components/pageStyles/Dashboard.styles'
import { useEffect } from 'react'
import { useState } from 'react'
import queryString from 'query-string'

const Dashboard = () => {

  const [topArtists, setTopArtists] = useState('')
  const [artistEvents, setArtistEvents] = useState('')
  let parsed = queryString.parse(window.location.search)
  let accessToken = parsed.access_token
  const ticketmasterURI = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey='
  const apiKey = 	'TnZ0TAmAIg23wmcPtZkvFbppZpp2dMxr'
  const apiSecret = 'gDy8WDgwDxA5hGD0'
  const artists = topArtists.items
  console.log(accessToken)

  useEffect(() => {
   (async function fetchData(){
      const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
        headers: {'Authorization': 'Bearer ' + accessToken }
      })
      const json = await response.json()
      return setTopArtists(json)
    })()
  }, [accessToken])

  useEffect(() => {
    let nearMe = ''
    if(artists){ nearMe = Promise.all(
      artists.map(async (artist) => {
        const response = await fetch(ticketmasterURI + apiKey + '&keyword=' + artist.name )
       return  await response.json()
      })
    )
 
  }

  console.log(nearMe)

    

    return

    
   
   }, [])

//  console.log(artistEvents)

  return (
    <DashboardContainer>
      <Header dash={true}/>
      
    </DashboardContainer>
  )
}

export default Dashboard