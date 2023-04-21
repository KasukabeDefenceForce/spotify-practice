import React from "react";
import "../components/Card.css"


interface PCardProps{
    image: string,
    songName: string,
    artist: string
}

function PCard({image, songName,artist}: PCardProps) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={image} alt="tta" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{songName}</h3>
                </div>
                <div className="card-body">
                    <p>{artist}</p>
                </div>
            </div>
        </div>
    )
}

export default PCard;