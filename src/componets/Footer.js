import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-sm:mt-40">
      <div className="w-full md:flex md:items-center md:justify-center text-sm">
        <div className="flex max-sm:ml-20">
          <div className="p-1">
            <FaRegCopyright />
          </div>
          <div>Brogan Hird Corporation</div>
        </div>
        <div className="max-sm:ml-10">
          <ul className="list-none flex px-1 md:px-2">
            <li className="px-1 md:px-2">Term of Use</li>
            <li className="px-1 md:px-2">Privacy Policy</li>
            <li className="px-1 md:px-2">Privacy Notice</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
