import React from "react";
import "./services.css";
import{BiCheck} from "react-icons/bi"

export default function Services(){
    return(
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container service_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX design</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon"/>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}