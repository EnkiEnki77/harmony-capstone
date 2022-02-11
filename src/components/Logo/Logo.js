import React from 'react'
import { AppName, HomeLink, LogoContainer, LogoIcon } from './Logo.styles'

const Logo = (props) => {
  return (
    <LogoContainer>
        
        {props.messages ? 
        [<HomeLink to='/dashboard'>
            <LogoIcon/>
            <AppName>Harmony</AppName>
        </HomeLink>]
        : [<LogoIcon/>,
        <AppName>Harmony</AppName>]}
    </LogoContainer>
  )
}

export default Logo