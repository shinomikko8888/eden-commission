import React from "react";
import { eden_logo } from "../../../assets";
import TopNavButtons from "./nav-buttons";

export default function TopNavBar(props){
    // Props for future use
    const navButtons = [
        {
            text: 'Home',
            path: '/',
        },
        {
            text: 'Service',
            path: '/services',
        },
        {
            text: 'Portfolio',
            path: '/portfolio',
        },
        {
            text: 'About',
            path: '/about',
        },
        {
            text: 'Contact',
            path: '/contact',
        },
    ]

    return(
        <>
            <div className="top-navigation-bar">
                <div className="px-5 d-flex justify-content-between align-items-center w-100">
                    <div className="image-container">
                        <img src={eden_logo} className="nav-logo" alt="Eden Logo" width={130}></img>
                    </div>
                    <div className="button-containers">
                        <TopNavButtons buttons={navButtons}/>{/* Pass navButtons as buttons props */}
                        <button className="quote-btn">Get a Quote</button>
                    </div>
                </div>
            </div>
        </>
    )
}
