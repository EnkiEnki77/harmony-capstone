import React from 'react'
import Header from '../components/header/Header'
import { DashboardContainer } from '../components/pageStyles/Dashboard.styles'

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header dash={true}/>
      
    </DashboardContainer>
  )
}

export default Dashboard