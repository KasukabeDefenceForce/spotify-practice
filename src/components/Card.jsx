import React from "react";
import "../components/Card.css"

function Card(props) {
    return (
        <div className="slide-container">
            <div className="slide-content">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={props.image} alt="track" id="tt" />
                            </div>
                        </div>
                        <div className="card-content">
                            <p className="name">
                                {props.songName}
                            </p>
                            <p className="artist">
                                {props.artist}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;