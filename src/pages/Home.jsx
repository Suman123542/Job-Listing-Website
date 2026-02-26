import React from 'react'
import HeroSection from '../component/HeroSection'
import '../index.css';
import Cards from '../component/Cards';
const Home = () => {
  return (
    <div>
      <HeroSection onSearch={(keyword, location) => {
        window.location.href = `/jobs?keyword=${keyword}&location=${location}`;
      }} />
      <Cards />
    </div>
  )
}

export default Home;