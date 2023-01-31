import React from "react";
import "./services.css";
import{BiCheck} from "react-icons/bi"

export default function Services(){
    return(
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX & Web design</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                    </ul>
                </article>
                {/*End of UI/UX */}
                <article className="service">
                    <div className="service_head">
                        <h3>Frontend Development</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                    </ul>
                </article>
                {/*End of Frontend */}
                <article className="service">
                    <div className="service_head">
                        <h3>FullStack Development</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                    </ul>
                </article>
                {/*End of fullstack */}
            </div>
        </section>
    )
}