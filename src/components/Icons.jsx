import React from 'react'
import "./about.css"
export const Icons = (props) => {
  return (
    <div className='Icons' >
        <img src={props.url} alt="" />
         <h3 >{props.title}</h3>
    </div>
  )
}
