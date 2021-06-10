import React from 'react'
import footerLogo from '../images/footerLogo.png'
function Footer() {
  return (
    <div className="footerContainer">
      <div className="container" style={{padding:"10px"}}>
      <div className="row">
        <div className="col s12 l5 m5 left-align footerColumn" >
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img src={footerLogo} alt=".." />&nbsp;<span style={{fontSize:"28px",fontWeight:"bold"}}>organic</span></div>
          <p className="left-align" style={{fontSize:"12px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.loren met</p>
           <div className="bottomBorder" style={{marginTop:"50px"}}></div>
          <p style={{fontWeight:"800"}}>&copy; Copyright 2020 Nature</p>
        </div>
        <div className="col s12 l2 m2 footerColumn" >
          <p style={{fontWeight:"bold"}}>Information</p>
          <div className="bottomBorder"></div>
          <p style={{fontSize:"13px"}}>About Us</p>
          <p style={{fontSize:"13px"}}>Products</p>
          <p style={{fontSize:"13px"}}>Contact Us</p>
          <p style={{fontSize:"13px"}}>Terms of Service</p>
        </div>
        <div className="col s12 l5 m5 footerColumn" >
          <p style={{fontWeight:"bold"}}>Follow Us</p>
          <div className="bottomBorder"></div>
          <a href=""><i className="fab fa-facebook footerIcons"></i></a>
          <a href=""><i className="fab fa-linkedin footerIcons footerIconsRound"></i></a>
          <a href=""><i className="fab fa-twitter-square footerIcons footerIconsRound"></i></a>
          <a href=""><i className="fab fa-instagram-square footerIcons footerIconsRound"></i></a>
        </div>
      
      </div>
      </div>
     
    </div>
  )
}

export default Footer
