import React from "react";
import {Title} from "./text/text";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faHome} from "@fortawesome/free-solid-svg-icons";
import './Header.css';
import {useHistory} from "react-router-dom";

export default function Header ({imageLink, title, isHome}) {

    const history = useHistory();

    const handleHome = () => {
        history.push('/');
    }

    const handleBack = () => {
        history.goBack();
    }

    return (
        <div className={"header"} style={{backgroundImage: `linear-gradient(rgba(19,23,27,0),rgba(19,23,27,20) 95%, rgba(19,23,27,100)),url(${imageLink})`}}>
            <Title style={{margin: "auto"}}>{title}</Title>
            {history.length > 1 && !isHome && <FontAwesomeIcon icon={faChevronLeft} className={"back-arrow"} size={'2x'} onClick={handleBack}/>}
            {!isHome && <FontAwesomeIcon icon={faHome} className={'home-icon'} size={'2x'} onClick={handleHome}/>}
        </div>
    )
}
