import React, { Component } from 'react';  
import {NavLink} from 'react-router-dom';
import './All.css';





export class NavBar extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container-fluid ">
        {/* <Link className="navbar-brand text-white" to="/">E-Voting</Link> */}
            <NavLink to="/" className="navbar-brand text-white" >E-Voting</NavLink>
          {/* <a className="navbar-brand text-white" href="#">E-Voting</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
            <li>
            <NavLink to="/" className="nav-link active text-white" aria-current="page">Home</NavLink>
                {/* <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link> */}
              </li>
            <li>
            <NavLink to="/Instructions" className="nav-link active text-white" aria-current="page">Instructions</NavLink>
                {/* <Link className="nav-link active text-white" aria-current="page" to="/about">About Us</Link> */}
              </li>
            <li>
            <NavLink to="/contact" className="nav-link active text-white" aria-current="page">Contact</NavLink>
                {/* <Link className="nav-link active text-white" aria-current="page" to="/services">Services</Link> */}
              </li>
            
              
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>









      
        // <div className='container-fluid bg-dark text-white '>

        // <div className=' row '>
        
        // <div className=' col-lg-6 py-3 m-6 h2'> <NavLink to="/" style={{textDecoration:'none',color:"white" ,cursor:"pointer" }}>E-Voting</NavLink></div>

        // <div className=' col-lg-2 py-3 m-6 display-6'> <NavLink to="/" style={{textDecoration:'none',color:"white" ,cursor:"pointer" }}>Home</NavLink></div>

        // <div className=' col-lg-2 py-3 m-6 display-6'> <NavLink  to="/Instructions" style={{textDecoration:'none',color:"white" ,cursor:"pointer" }}>Instructions</NavLink></div>

        // <div className=' col-lg-2 py-3  display-6'> <NavLink  to="/contact" style={{textDecoration:'none',color:"white" ,cursor:"pointer" }}>Contact Us</NavLink></div>
        



        // </div>

        // </div>
       
            
          
    )
  }
}

export default NavBar