import React from 'react';
import data from './data';

export default function Card(props){
    return(
        <div className='Card'>
            <div className="row">
                <div className="col-lg-5">
                    <img src={props.img} className='img'/>
                </div>
                <div className="col-lg-4">
                    <div className="content">
                        <div className="small">
                            <small><i className="fa-solid fa-location-dot location"></i> {props.country}</small><a href="#">View in Google Maps</a>
                        </div>
                        <h3 style={{overflowY: "hidden"}}>{props.locationName}</h3>
                        <p><strong>{props.date}</strong></p>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}