import React from 'react'
import "./home.css"
export default function Navbar()
{  
     function handlechange(e)
     {
          let item = e.target
          console.log(item.className)
     }
    return(
        <div className="navbarr">
            <img className='navlogo' src="./images/logo1.png" alt="" /> 
           
             <ul className="navlist">
              <li className="navitems navactive"> <a onClick={handlechange} href="#ww">home </a> </li>
              <li className="navitems  "> <a onClick={handlechange} href="##">projects </a> </li>
              <li className="navitems  "> <a onClick={handlechange} href="#ww"> about </a> </li>
              <li className="navitems  "> <a onClick={handlechange} href="#ww">about </a> </li>
              
                
             </ul>
        </div>
    )
}