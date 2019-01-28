import React from "react";
import "./style.css";

const ImageCard = (props) => {

    return (
        <div className="img-fluid d-inline-block img-container">
                <img alt={props.name} src={props.image} />
        </div>
    )
};

export default ImageCard;