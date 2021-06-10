import React from 'react'
import leaf from '../images/leaf.png'
import '../../App.css'
import bp1 from '../images/bcp1.png'
import bp2 from '../images/bcp2.png'
import bp3 from '../images/bcp3.png'
function BlogPost() {
  return (
    <div className="container blogPostContainer">
       <div className="row">
        <div className="col s12 l12 m12 center-align" style={{color:"#374b5c"}}>
          <img src={leaf} alt=".." />
          <h4  style={{color:"#374b5c"}}>Read Our Blog</h4>
          <p style={{fontSize:"12px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tenetur, illum suscipitMagni deleniti blanditiis<br/> quam hic sapiente quis id voluptatibus maxime..</p>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l4 m4">
          <div className="center-align blobPostData">
            <img src={bp1} alt=".." className="responsive-img" style={{borderRadius:"15px",width:"240px"}}/>
            <h6 style={{color:"#00dbd0"}}>Blog Post One</h6>
            <p style={{color:"#374b5c",fontSize:"12px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab qui praesentium quidem, ipsa.</p>
            <div className="bolgPostReadDiv">
              <p className="blogPostRead">Read More</p>
            </div>
          </div>
        </div>
        <div className="col s12 l4 m4">
            <div className="center-align blobPostData"> 
            <img src={bp2} alt=".." className="responsive-img"  style={{borderRadius:"15px",width:"240px"}}/>
            <h6 style={{color:"#00dbd0"}}>Blog Post Two</h6>
            <p style={{color:"#374b5c",fontSize:"12px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab qui praesentium quidem, ipsa.</p>
            <div className="bolgPostReadDiv">
              <p className="blogPostRead">Read More</p>
            </div>
          </div>
        </div>
        <div className="col s12 l4 m4">
            <div className="center-align blobPostData">
            <img src={bp3} alt=".." className="responsive-img" style={{borderRadius:"15px",width:"240px"}}/>
            <h6 style={{color:"#00dbd0"}}>Blog Post Three</h6>
            <p style={{color:"#374b5c",fontSize:"12px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab qui praesentium quidem, ipsa.</p>
            <div className="bolgPostReadDiv">
              <p className="blogPostRead">Read More</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
