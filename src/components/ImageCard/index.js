import React from "react";
import "./style.css";

const ImageCard = (props) => (

    <div className="img-fluid d-inline-block img-container">
        <img
            alt={props.name}
            src={props.image}
            onClick={() => props.handleClick(props.id)} />
    </div>
);

export default ImageCard;