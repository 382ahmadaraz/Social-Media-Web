import Navbar from '../../components/navbar/Navbar'
import Letter from '../../components/newsletter/Letter'
import Footer from '../../components/footer/Footer'
import HeroSection from '../../pageComponents/whatWeDo/hero-section/HeroSection'
import ServiceCards from '../../pageComponents/whatWeDo/cards/Service'
import Different from '../../pageComponents/whatWeDo/how-deffer/Different'

export default function WhatWeDo() {
  return (
    <div>
        <Navbar/>
      <HeroSection/>
      <ServiceCards/>
      <Different/>
      <Letter/>
      <Footer/>
    </div>
  )
}
