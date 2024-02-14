import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";


const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/megs-townie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/meagan-townsend/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/runtime_tamer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
