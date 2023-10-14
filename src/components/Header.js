import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./style.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" style={{color:"white"}} className="logo text-2xl font-bold text-accent">
        PYR
      </a>

      <nav className="color1 hidden md:block" >
        <ul className="flex">
          <li >
            <a style={{color:"white"}} href="/#about">About</a>
          </li>
          <li>
            <a style={{color:"white"}} href="/#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1TZ7lO6Aa1_tUXTl-nP4ezvuvPiE3bvZa/view"
              target="_blank"
              without
              rel="noreferrer" style={{color:"white"}}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
