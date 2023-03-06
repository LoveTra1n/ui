import React from 'react';
import "./card.css"
import {Link} from "react-router-dom";

const Cards = ({item}) => {
    return (
        <Link to={`/${item.id}`}>
            <div  className={"card"}>
                <img className={"card-photo"} src={item.image}/>
                <h3>{item.title}</h3>
                <h3>{item.id}</h3>
            </div>
        </Link>
    );
};

export default Cards;