import React from 'react';
import {useState, useEffect} from "react";
import "../App.css"

function About(props) {
    const [rockets, setRockets] = useState([])
    useEffect(() => {
        const fetchSpaceX = async () => {
            const response = await fetch('https://api.spacexdata.com/v4/rockets');
            const data = await response.json();
            setRockets(data)
        }
        fetchSpaceX();
    }, [])
    return (
        <div className="container">
            <h1 className="heading">SpaceX Rockets</h1>
            <div className="cards">
                {rockets.map((rocket) => (
                    <div className="card" key={rocket.id}>
                        <img src={rocket.flickr_images[1]} className="card-img" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{rocket.name}</h5>
                            <p className="card-text">Rocket height: {rocket.height.meters} meters</p>
                            <p className="card-text2">Rocket info: {rocket.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;