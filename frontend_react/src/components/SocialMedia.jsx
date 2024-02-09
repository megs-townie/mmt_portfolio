import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";


const SocialMedia = () => {
  return( 
    <div className="app__social">
        <div>
            <BsGithub/>
        </div>
        <div>
            <FaLinkedinIn/>
        </div>
        <div>
            <BsInstagram/>
        </div>
    </div>)
};

export default SocialMedia;
