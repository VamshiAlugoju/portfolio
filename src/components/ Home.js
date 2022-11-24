import React from 'react';
import "./home.css"
export default function Home()
{   
     

     
    return(
        <div id='Home' className="Home">
            <h1  className="title">Hi</h1>
            <br/>
            <h1  className="title">I'm  webvital</h1>
            <img  className='belowline' src="./images/belowline.png" alt="" />
            <ul  className="icons">
                <li  className='iconlist'><a href="//www.github.com"  > <i className="fa-brands fa-github"></i></a></li>
                <li  className='iconlist'><a href="dummy"><i className="fa-brands fa-linkedin"></i> </a></li>
                <li  className='iconlist'><a href="dummy"> <i className="fa-brands fa-instagram"></i> </a></li>
                <li  className='iconlist'><a href="dummy"> <i className="fa-brands fa-facebook"></i> </a></li>

            </ul>

       <button  className="btn btn-outline-dark my-4"  > <a href="www.google.com" > Contact me</a></button>
        </div>
    )
}