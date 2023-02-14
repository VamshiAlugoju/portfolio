import React from 'react'
import "./project.css"
export default function ProjectItems  (props)  { 

  
    // bootstrap cards 
  return (
    <div className="projectItems">
        <div className="card" style={{width: "15rem"}}>
  <img src={props.img} className="card-img-top project-img" alt="..." />
  <div className="card-body">
    <h4 className="card-title"> {props.title}</h4>
    <p className="card-text">{props.about} </p>
    <a href={props.link} className="btn  btn-outline-dark">Open</a>
  </div>
</div>
    </div>
  )
}

