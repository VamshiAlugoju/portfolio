import React from 'react'
import "./home.css"          //nav bar styles is in home.css

export default function Navbar()
{  
     function handlechange(e)
     {
          let btns = document.querySelectorAll('.navbarr .navlist li')
           btns.forEach(btn=>{
              btn.classList.remove("navactive")
           })
           e.target.parentNode.classList.add("navactive")
     }
    return(
        <div className="navbarr">
            <img className='navlogo' src="./images/logo1.png" alt="" /> 
           
             <ul className="navlist">
              <li className="navitems navactive"> <a onClick={handlechange} href="#Home">home </a> </li>
              <li onClick={handlechange} className="navitems  "> <a  href="#project">projects </a> </li>
              <li className="navitems  "> <a onClick={handlechange} href="#about"> about </a> </li>
              <li className="navitems  "> <a onClick={handlechange} href="#ww">about </a> </li>
             </ul>
        </div>
    )
}