import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function TopNavButtons(props) {
    const location = useLocation();
    const {buttons} = props

    return(
        <>
            {
                buttons.map((button) => ( // Iterate over the props given and if in the given location, add -active to the className
                    <Link className={`top-nav-button${location.pathname === button.path ? '-active' : ''} `} to={button.path}>{button.text}</Link>
                ))
            }
        </>
    )
}