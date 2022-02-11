import React from 'react'
import { SearchContainer, SearchIcon, SearchInput } from './ZipSearch.styles'


const ZipSearch = () => {
  return (
    <>
        <SearchContainer>
            <SearchIcon/>
            <SearchInput type='text' name='zip search' placeholder='City or Zip Code'/>
        </SearchContainer>
    </>
  )
}

export default ZipSearch