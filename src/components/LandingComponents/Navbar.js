import React, { Component } from 'react'
import '../../App.css'
import pacilogo from '../images/pacilogo.png'
export class Navbar extends Component {
  componentDidMount(){
    const M=window.M
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }
  render() {
    return (
      <div className="container">
      <nav className="transparent z-depth-0" style={{padding:"10px 0px"}}>
    <div className="nav-wrapper">
      <a href="" className="brand-logo"><img src={pacilogo} style={{width:"60px",height:"60px"}}/>&nbsp;organic</a>
      <a  data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons" style={{color:"#374b5c"}}>menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="" className="navLinks" style={{borderBottom:"2px solid #00dbd0"}}>Home</a></li>
        <li><a href="" className="navLinks">Products</a></li>
        <li><a href="" className="navLinks">Blog</a></li>
        <li><a href="" className="navLinks">About Us</a></li>
        <li><a href="" className="navLinks btn transparent z-depth-0 navBtn">Contact</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="" className="navLinks">Home</a></li>
    <li><a href="" className="navLinks">Products</a></li>
    <li><a href="" className="navLinks">Blog</a></li>
    <li><a href="" className="navLinks">About Us</a></li>
    <li><a href="" className="navLinks btn transparent z-depth-0 navBtn">Contact</a></li>
  </ul>
          
    </div>
    )
  }
}

export default Navbar
