import React from "react";
import "./GameCard.css";

const GameCard = props => {
    console.log(props);
    return (
    <div className = "card">
        <div className="img-container">
            <img alt={props.name} src={props.image}
            onClick={()=>props.handleClick(props.id)} />
        </div>
    </div>
)}

export default GameCard;