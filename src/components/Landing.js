import React from 'react'
import '../App.css'
import BigLogo from './LandingComponents/BigLogo'
import Navbar from './LandingComponents/Navbar'
import OrganicFood from './LandingComponents/OrganicFood'
import Greenery from './LandingComponents/Greenery'
import NewsLetter from './LandingComponents/NewsLetter'
import BlogPost from './LandingComponents/BlogPost'
import Footer from './LandingComponents/Footer'
function Landing() {
  return (
    <div>
        <Navbar/>
       <div> 
         <BigLogo/>
         <OrganicFood/>
         <Greenery/>
         <NewsLetter/>
         <BlogPost/>
         <Footer/>
      </div>
    </div>
   
  )
}

export default Landing
