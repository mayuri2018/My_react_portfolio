import React from "react";
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {BiBook} from "react-icons/Bi";
import {AiOutlineUser} from "react-icons/ai";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";

export default function Nav(){
    return(
        <nav>
            <a href="#"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#services"><RiServiceLine/></a>
            <a href="#contact"><BiMessageSquareDetail/></a>
        </nav>
        
    )
}