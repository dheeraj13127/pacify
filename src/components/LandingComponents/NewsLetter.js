import React from 'react'
import '../../App.css'
import sideLeaf from '../images/sideLeaf.png'
import doe from '../images/doe.png'
function NewsLetter() {
  return (
    <div className="fluid-container newsLetterContainer">
      <div className="row">
        <div className="col s3 l3 m3 left-align">
        <img src={sideLeaf} className="responsive-img sideLeaf" alt=".." />
        </div>
        <div className="col s9 l9 m9">
          <div className="row">
            <div className="col s9 l9 m9 center-align" style={{color:"#374b5c"}}>
            <i className="fas fa-quote-right" style={{color:"#add8e6",fontSize:"45px"}}></i><br />
            <img src={doe} alt=".." className="responsive-img doeImg"/>
            <h6>Jane Doe</h6>
            <div>
            <i className="far fa-star newsLetterStars"></i>
            <i className="far fa-star newsLetterStars"></i>
            <i className="far fa-star newsLetterStars"></i>
            <i className="far fa-star newsLetterStars"></i>
            <i className="far fa-star newsLetterStars"></i>
            </div>
            <p className="doeParagraph">Thank you for all the amazing produce and products you deliver each week.<br/><br/>you make my life so easy and bring goodness into our family eating.</p>
            <p  className="doeParagraph">I've been roasting a lot of brussel sprouts and</p>
            <div>
            <i className="fas fa-circle newsLetterDots1"></i>
            <i className="far fa-circle newsLetterDots"></i>
            <i className="far fa-circle newsLetterDots" ></i>
            <i className="far fa-circle newsLetterDots"></i>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col s9 l9 m9 center-align" style={{marginTop:"30px",color:"#374b5c"}}>
            <h4>Subscribe to our Newsletter</h4>
            <p style={{fontSize:"13px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magnam nesciunt cumque incidunt facere, corrupti mollitia.</p>
            <div>
              <form>
              <div className="row center-align">
          <div className="input-field col s12 l6 push-l3 m8 push-m2 newsLetterInput">
          <input placeholder="Enter your Email Address" className="newLetterPlaceholder" type="email"/>
          <button className="btn btn-large waves-effect newsLetterSubsBtn">Subscribe</button>
           </div>
          </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
