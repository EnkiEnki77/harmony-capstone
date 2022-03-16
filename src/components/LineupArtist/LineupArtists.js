import React from 'react'
import {LineupArtistCont, ArtistPhoto, ArtistName} from './LineupArtist.styles'
import heroImg from '../../images/unsplash_hgO1wFPXl3I.png'

const LineupArtists = (props) => {
  return (
    
    <LineupArtistCont>
      <ArtistPhoto src={props.image}/>
      <ArtistName>{props.name}</ArtistName>
    </LineupArtistCont>
  )
}

export default LineupArtists