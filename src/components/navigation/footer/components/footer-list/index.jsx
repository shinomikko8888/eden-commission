import React from "react";

export default function FooterList(props){
    const {item} = props 
    return(
        <>
            <div className="footer-list px-4 py-3">
                <h6 className="mb-4">{item.title}</h6>
                <ul>
                {
                    item.navs.map((nav) => (
                        <>

                                <li className="my-4 d-flex align-items-center justify-content-start">
                                    {
                                        nav.icon && 
                                            <i className={nav.icon}></i>
                                    }
                                    {nav.text}
                                </li>
                            
                        </>
                    ))
                }
                </ul>
            </div>
        </>
    )
}