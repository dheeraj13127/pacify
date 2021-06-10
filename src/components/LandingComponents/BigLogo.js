import React from 'react'
import bigLogo from '../images/bigLogo1.png'
function BigLogo() {
  return (
    <div className="container bigLogoContainer">
      <div className="row">
        <div className="col s12 l5 m5" style={{color:"#374b5c"}}>
         <h4 style={{fontWeight:"300"}}>Healthy life with</h4>
         <h3 style={{fontWeight:"bold"}}>Nature Organic</h3>
         <p style={{fontWeight:"500"}}>Vegetables are the edible parts of the plant<br/>that is used in cooking or can be eaten now</p>
         <button className="btn waves-effect bigLogoButton">Explore  Now</button>
        </div>
        <div className="col s12 l7 m7">
          <div className="center-align">
            <img className="responsive-img" src={bigLogo} alt=".." style={{marginTop:"40px"}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigLogo
