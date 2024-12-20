import React from 'react'
import Landing from '../components/Landing'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Header from '../components/Header'
function Home() {
  return (
    <>
    <Header/>
    <  Landing/>
    <SpecialityMenu />
    <TopDoctors/>
    <Banner/>
   
    </>
  )
}

export default Home