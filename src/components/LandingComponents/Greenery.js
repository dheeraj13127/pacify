import React from 'react'
import '../../App.css'
import green1 from '../images/green1.png'
import green2 from '../images/green2.png'
import green3 from '../images/green3.png'
function Greenery() {
  return (
    <div className="container greeneryContainer">
      <div className="row">
        <div className="center-align">
          <h4>Proudly presented by</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tenetur, illum suscipitMagni <br/>deleniti blanditiis quam hic sapiente quis id voluptatibus maxime..</p>
        </div>
        <div>
        <div className="col s12 l2 m2 center-align" style={{marginTop:"10px"}}>
        <img src={green1} className="responsive-img" alt=".." />
        </div>
        <div className="col s12 l2 m2 center-align" style={{marginTop:"10px"}}>
        <img src={green2} className="responsive-img" alt=".." />
        </div>
        <div className="col s12 l4 m4 center-align" style={{marginTop:"10px"}}>
        <img src={green3} className="responsive-img" alt=".." />
        </div>
        <div className="col s12 l2 m2 center-align" style={{marginTop:"10px"}}>
        <img src={green2} className="responsive-img" alt=".." />
        </div>
        <div className="col s12 l2 m2 center-align" style={{marginTop:"10px"}}>
        <img src={green1} className="responsive-img" alt=".." />
        </div>
        </div>
        
      </div>
      <div className="row">
        <div className="col s12 l12">
        <div className="center-align">
        <i className="fas fa-circle greeneryDots"></i>
        <i className="fas fa-circle greeneryDots greeneryDots1"></i>
        <i className="fas fa-circle greeneryDots"></i>
        <i className="fas fa-circle greeneryDots"></i>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Greenery
