import React from 'react'
import {Spinner} from 'react-bootstrap'
import { LoadingContainer } from '../components/pageStyles/LoadingPage.styles'

const LoadingPage = () => {
  return (
    <LoadingContainer>
        <Spinner animation="grow" />
    </LoadingContainer>
  )
}

export default LoadingPage