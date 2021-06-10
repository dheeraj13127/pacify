import React from 'react'
import '../../App.css'
import leaf from '../images/leaf.png'
import organicFood from '../images/organicFood.png'
function OrganicFood() {
  return (
    <div className="container organicFoodContainer">
      <div className="row">
        <div className="col s12 l12 m12 center-align" style={{color:"#374b5c"}}>
          <img src={leaf} alt=".." />
          <h4  style={{color:"#374b5c"}}>Welcome to Nature</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tenetur, illum suscipitMagni deleniti blanditiis<br/> quam hic sapiente quis id voluptatibus maxime..</p>
        </div>
      </div>
      <div className="row" style={{color:"#374b5c"}}>
        <div className="col s6 l3 m3">
          <div className="center-align organicFoodBorder">
            <img src={organicFood} alt=".." />
            <p style={{fontWeight:"bolder"}}>Organic Food</p>
            <p style={{fontSize:"12px"}}>Lorem, ipsum dolor sit<br/> amet consectetur</p>
          </div>
        </div>
        <div className="col s6 l3 m3">
        <div className="center-align organicFoodBorder"> 
            <img src={organicFood} alt=".." />
            <p style={{fontWeight:"bolder"}}>Organic Food</p>
            <p style={{fontSize:"12px"}}>Lorem, ipsum dolor sit<br/> amet consectetur</p>
          </div>
        </div>
        <div className="col s6 l3 m3">
        <div className="center-align organicFoodBorder"> 
            <img src={organicFood} alt=".." />
            <p style={{fontWeight:"bolder"}}>Organic Food</p>
            <p style={{fontSize:"12px"}}>Lorem, ipsum dolor sit<br/> amet consectetur</p>
          </div>
        </div>
        <div className="col s6 l3 m3">
        <div className="center-align organicFoodBorder"> 
            <img src={organicFood} alt=".." />
            <p style={{fontWeight:"bolder"}}>Organic Food</p>
            <p style={{fontSize:"12px"}}>Lorem, ipsum dolor sit<br/> amet consectetur</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganicFood
