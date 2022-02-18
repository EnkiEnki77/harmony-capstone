import React from 'react'
import Button from '../button/Button'
import { SearchContainer, SearchIcon, SearchInput, UserEmail, UserImage, UserToken} from './ZipSearch.styles'


const ZipSearch = (props) => {
  console.log(props.accessToken)
  return (
    
    <>
        <SearchContainer action='http://localhost:3001/callback' method='POST' encType='multipart/form-data' onboard = {props.onboard}>
            <SearchIcon onboard = {props.onboard}/>
            <SearchInput type='text' name='zipCode' onboard = {props.onboard} dash= {props.dash}  placeholder='City or Zip Code'/>
            {props.onboard &&  
           [<UserEmail type = 'email' name='email' value={props.email}/>,
           <UserToken type = 'text' name='token' value={props.accessToken}/>,
            <UserImage type = 'text' name='profilePhoto' value = {props.image}  />,
            <Button type = "submit" text = "Get Started" margin = '30px' buttonAltW = '3000px' buttonAltH = '52px' hover = {true} buttonAlt ={true} buttonAlt2 ='white'/>]}
        </SearchContainer>
    </>
  )
}

export default ZipSearch