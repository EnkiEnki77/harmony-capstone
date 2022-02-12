import React from 'react'
import Button from '../button/Button'
import { SearchContainer, SearchIcon, SearchInput } from './ZipSearch.styles'


const ZipSearch = (props) => {
  return (
    <>
        <SearchContainer onboard = {props.onboard}>
            <SearchIcon onboard = {props.onboard}/>
            <SearchInput onboard = {props.onboard} type='text' name='zip search' placeholder='City or Zip Code'/>
            {props.onboard && <Button text = "Get Started" margin = '50px' buttonAltW = '300px' buttonAltH = '52px' buttonAlt ={true}/>}
        </SearchContainer>
    </>
  )
}

export default ZipSearch