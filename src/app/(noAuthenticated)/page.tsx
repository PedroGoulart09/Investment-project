import React from 'react'
import NavBar from '../components/dashboard/navBar'
import AccessInvestiment from '../components/dashboard/accessInvestiment'
import ActivesWorld from '../components/dashboard/activesWorld'
import Signin from '../components/dashboard/signin'
import Footer from '../components/dashboard/footer'
import { GlobeDemo } from '../components/dashboard/globeComponent'


export default function page() {
 
  return (
    <>
        <NavBar />
        <AccessInvestiment />
        <ActivesWorld />
        <GlobeDemo />
        <Signin />
        <Footer />
       
    </>
  )
}
