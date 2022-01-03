import React, {useEffect} from "react";
import Button from "../form/Button";
import './Card.css';
import {useHistory} from "react-router-dom";

export default function Card ({cardItem}) {
    const history = useHistory();

    const handleClick = () => {
        history.push(cardItem.path)
    }

    return (
        <div className={"project-card"} style={{backgroundImage: `url(${cardItem.imageLink})`}}>
            <div className={"project-card-content"}>
                <h2 className={"project-card-title"}>
                    {cardItem.name}
                </h2>
                <p className={"project-card-body"}>
                    {cardItem.description}
                </p>
                <Button onClick={handleClick} label={"Learn more"}/>
            </div>
        </div>
    )
}
