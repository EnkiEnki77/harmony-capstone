import React from 'react'
import Header from '../components/header/Header'
import { MessagesContainer } from '../components/pageStyles/Messages.styles'

const Messages = () => {
  return (
    <MessagesContainer>
        <Header messages = {true} onboard = {true}/>
    </MessagesContainer>
  )
}

export default Messages