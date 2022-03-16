import { AnimatePresence } from 'framer-motion'
import React from 'react'
import {Spinner} from 'react-bootstrap'
import { LoadingContainer } from '../components/pageStyles/LoadingPage.styles'

const LoadingPage = () => {
  return (
    <AnimatePresence>
      <LoadingContainer key='loading' initial={{opacity:0, }} animate={{opacity: 1, x:0, borderRadius: 0}} exit={{opacity: 0, x: -1000}} transition={{duration: 0.5}}>
          <Spinner animation="grow" />
      </LoadingContainer>
    </AnimatePresence>
  )
}

export default LoadingPage