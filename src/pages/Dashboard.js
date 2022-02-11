import React from 'react'
import Header from '../components/Header/Header'
import { DashboardContainer } from '../components/PageStyles/Dashboard.styles'

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header dash={true}/>
    </DashboardContainer>
  )
}

export default Dashboard