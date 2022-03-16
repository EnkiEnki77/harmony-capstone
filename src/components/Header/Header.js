import React from 'react'
import { HeaderContainer } from './Header.styles'
import { Logout } from './Header.styles'
import Logo from '../logo/Logo'
import ZipSearch from '../zipSearch/ZipSearch'



const Header = (props) => {
  return (
    <HeaderContainer>
        <Logo messages = {props.messages}/>

        {props.dash && [
        <Logout to='/'>Logout</Logout>]}

        {props.onboard && <Logout to='/'>Logout</Logout>}
    </HeaderContainer>
  )
}

export default Header