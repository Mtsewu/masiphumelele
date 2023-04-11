import React from 'react'

export default function Info(props){
    return(
        <div className="info-card">
          <img className="info-pic"src={props.img} alt= 'catagory pic'/> 
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <button  type='button' href={props.sign} className="info-button">Sign up </button>
            


        </div>
    )
}