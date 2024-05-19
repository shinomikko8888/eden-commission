import React from "react";
import { eden_logo_white } from "../../../assets";
import { FooterList, FooterNewsletter } from "./components";

export default function Footer(){
    const footerItems = [// Data management for footer items reused from previous project
        {
            title: 'Reach us',
            navs: [
                {
                    icon: 'fa-solid fa-phone-volume',
                    text: '913-228-4495',
                },
                {
                    icon: 'fa-solid fa-envelope',
                    text: 'info@gogenesissolar.com',
                },
                {
                    icon: 'fa-solid fa-location-dot',
                    text: '6028 Stonybook CT, Topeka, KS 66614',
                },
            ]
        },
        {
            title: 'Company',
            navs: [
                {
                    text: 'About',
                },
                {
                    text: 'Contact',
                },
                {
                    text: 'Blogs',
                },
            ]
        },
        {
            title: 'Legal',
            navs: [
                {
                    text: 'Privacy Policy',
                },
                {
                    text: 'Terms & Services',
                },
                {
                    text: 'Terms of Use',
                },
                {
                    text: 'Refund Policy',
                },
            ]
        },
        {
            title: 'Quick Links',
            navs: [
                {
                    text: 'Eden Community',
                },
                {
                    text: 'Downloads',
                },
                {
                    text: 'Forum',
                },
            ]
        },
    ]
    return(
        <>
            <div className="footer">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="image-container pt-3">
                        <img src={eden_logo_white} width={285} alt="Eden Logo"></img> {/* Alt Logo used based on the Figma file */ }
                    </div>
                </div>
                <hr></hr>
                
                <div className="py-3 d-flex align-items-start justify-content-between">
                    {
                        footerItems.map((item) => (
                            <FooterList item={item}></FooterList> // To make the code more concise, iterate over the footer items using a map and pass them as props to the component.
                        ))
                    }
                    <FooterNewsletter/>
                </div>
            </div>
        </>
    )
}