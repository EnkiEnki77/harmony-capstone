import React from 'react'
import {LineupArtistCont, ArtistPhoto, ArtistName} from './LineupArtist.styles'
import heroImg from '../../images/unsplash_hgO1wFPXl3I.png'

const LineupArtists = () => {
  return (
    
    <LineupArtistCont>
      <ArtistPhoto src={heroImg}/>
      <ArtistName>Kendrick Lamar</ArtistName>
    </LineupArtistCont>
  )
}

export default LineupArtists