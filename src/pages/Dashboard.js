import React from 'react'
import Header from '../components/header/Header'
import { DashboardContainer } from '../components/pageStyles/Dashboard.styles'
import { useEffect } from 'react'
import { useState } from 'react'
import queryString from 'query-string'

const Dashboard = () => {

  const [topArtists, setTopArtists] = useState([])
  let parsed = queryString.parse(window.location.search)
  let accessToken = parsed.access_token
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

  

  return (
    <DashboardContainer>
      <Header dash={true}/>
      
    </DashboardContainer>
  )
}

export default Dashboard