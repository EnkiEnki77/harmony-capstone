import React from 'react'
import { HeaderContainer } from './Header.styles'
import { Logout } from '../Header/Header.styles'
import Logo from '../Logo/Logo'
import ZipSearch from '../ZipSearch/ZipSearch'

const Header = (props) => {
  return (
    <HeaderContainer>
        <Logo/>
        {props.dash && [<ZipSearch/>, <Logout to='/'>Logout</Logout>]}
        {props.onboard && <Logout to='/'>Logout</Logout>}
    </HeaderContainer>
  )
}

export default Header