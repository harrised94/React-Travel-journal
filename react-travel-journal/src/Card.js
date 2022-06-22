import React from 'react'
import PinIcon from './assets/pin.png'


function Card(props) {
  return (
    <div className="card">
        <img src={props.imageUrl} alt={'image of ' + props.location}/>
        
        <div className="content-wrap">
            <div className="location">
                <img src={PinIcon}></img>
                <span>{props.location}</span>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
           
            <div className="title">
                <h1>{props.title}</h1>
            </div>

            <div className="information">
                <p><strong>{props.startDate} - {props.endDate}</strong></p>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card