import React from 'react'
import "./home.css"
export default function Navbar()
{ 
    return(
        <div className="navbarr">
            <img className='navlogo' src="./images/logo1.png" alt="" /> 
             <ul className="navlist">
               <a href="#ww"><li className="navitems">home</li></a> 
               <a href="# ww"><li className="navitems">projects</li></a> 
               <a href="#ww"> <li className="navitems">about</li></a> 
               <a href="#ww"><li className="navitems">about</li></a> 
             </ul>
        </div>
    )
}