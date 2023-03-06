import React from 'react';
import "./header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={"/"}>слайдер</Link>
            <Link to={"/pag"}>пагинация</Link>
        </div>
    );
};

export default Header;