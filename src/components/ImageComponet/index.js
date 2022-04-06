import React, { Fragment } from "react";
import "./style.css";

const Images = (props) =>{
    return(
        <Fragment>
            <img src={props.src} alt={props.alt}/>
        </Fragment>
    )
}

export default Images;