import React from "react";

export default function FooterNewsletter(props){
    return(
        <>
            <div className="footer-newsletter">
                <div className="row">
                    <div className="col-5">
                        <h6>Join our Newsletter</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-center ">
                        <input className="footer-newsletter-input" placeholder="Your email address here"></input>
                        <button className="footer-subscribe">Subscribe</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <p>*  Will send you weekly updates for your better tool management.</p>
                    </div>
                </div>
            </div>
        </>
    )
}