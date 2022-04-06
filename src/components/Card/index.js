import React from "react";
import Images from "../ImageComponet";
import "./style.css"

const Card = (props) => {
    return(
        <div className="card-container">
        <h2>{props.subtitle}</h2>
        <p>{props.paragraf}</p>
        <Images
            src = {props.src}
            alt = {props.alt}
        />
       </div>
    )
}

export default Card;