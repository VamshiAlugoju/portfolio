import React from 'react'

export default function ProjectItems  (props)  { 
    // bootstrap cards 
  return (
    <div className="projectItems">
        <div className="card" style={{width: "18rem"}}>
  <img src={props.url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"> {props.title}</h5>
    <p className="card-text">{props.about} </p>
    <a href="#fs" className="btn btn-primary">Open</a>
  </div>
</div>
    </div>
  )
}

