import React, { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [icon, setIcon] = useState(false);

  const menuClick = () => {
    let menu = document.getElementById("navBar");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      setIcon(true);
    } else {
      menu.classList.add("hidden");
      setIcon(false);
    }
  };

  return (
    <header className=" h-8 md:h-10 w-full bg-gray-700 text-white fixed">
      <div className="h-full container mx-auto flex items-center justify-between">
        <div className="h-full w-auto mx-4 md:mx-8 flex items-center justify-center">
          <div className="w-10 ">
            <img src={logo} alt="logo" className="rounded-full" />
          </div>
          <div className="mx-2 md:4 text-white text-lg" style={{fontFamily:"Dancing Script",fontStyle:"normal"}}>Brogan Hird</div>
        </div>
        <div
          className="md:hidden text-3xl mx-0.5 text-center text-[cyan]"
          onClick={menuClick}
        >
          {icon ? <FaTimes /> : <FiAlignRight />}
        </div>
        <div className="hidden md:block mx-2 md:mx-4">
          <ul className="list-none flex items-center justify-center mr-5 px-2 text-lg" style={{fontFamily:"Cardo",fontStyle:"normal"}}>
            <li className="h-auto w-auto px-4 shadow-sm hover:text-[cyan] cursor-pointer"><Link to={"/"}>Home</Link></li>
            <li className="h-auto w-auto px-4 shadow-sm hover:text-[cyan] cursor-pointer"><Link to={"/plans"}>Photo Service</Link> </li>
            <li className="h-auto w-auto px-4 shadow-sm hover:text-[cyan] cursor-pointer"><Link to={"/plans"}>Hall Decoration</Link> </li>
            <li className="h-auto w-auto px-4 shadow-sm hover:text-[cyan] cursor-pointer"><Link to={"/plans"}>DJ</Link></li>
            <li className="h-auto w-auto px-4 shadow-sm hover:text-[cyan] cursor-pointer"><Link to={"/plans"}>Contact</Link></li>
          </ul>
        </div>
        <div className="hidden mx-2 md:mx-4 md:block hover:text-[cyan] cursor-pointer"><Link to={"/signin"}> Sign In</Link></div>
      </div>
      <div
        id="navBar"
        className="hidden absolute md:hidden h-[110vh] bg-gray-700 border-2 border-solid border-white text-white w-[90vw] -mt-10"
      >
        <div className="flex items-center justify-center mt-10">
          <div className="bg-[cyan] text-black px-6 py-2 rounded-full mx-2">
          <Link to={"/signup"} onClick={menuClick}> Sign Un</Link>
          </div>
          <div className="bg-[cyan] text-black px-6 py-2 rounded-full mx-2">
          <Link to={"/signin"} onClick={menuClick}> Sign In</Link>
          </div>
        </div>
        <div className=" mx-4 mt-6 w-auto h-full" style={{fontFamily:"Cardo",fontStyle:"normal"}}>
          <div className="font-semibold text-xl ">Wedding Service</div>
          <ul className=" w-[80vw] text-center list-none mr-6 mt-2 px-2 text-base border-none outline-none " >
            <li className="h-auto w-auto mx-4 py-1.5 border-b border-solid border-white" onClick={menuClick}>
              <Link to={"/"}>Home</Link>
            </li>
            <li className="h-auto w-auto mx-4 py-1.5 border-b border-solid border-white" onClick={menuClick}>
            <Link to={"/plans"}>Photo Service</Link>
            </li>
            <li className="h-auto w-auto mx-4 py-1.5 border-b border-solid border-white" onClick={menuClick}>
            <Link to={"/plans"}>Hall Decoration</Link>
            </li>
            <li className="h-auto w-auto mx-4 py-1.5 border-b border-solid border-white" onClick={menuClick}>
            <Link to={"/plans"}>DJ</Link>
            </li>
            <li className="h-auto w-auto mx-4 py-1.5 border-b border-solid border-white" onClick={menuClick}>
            <Link to={"/plans"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
