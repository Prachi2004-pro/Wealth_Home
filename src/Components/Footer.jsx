import React from "react";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <div id="contact" className="bg-black text-white w-full h-[300px] p-12">
      <div className="flex justify-around">
        <div>
          <h1>About Us</h1>
          <p className="text-gray-500 w-44 text-md my-5 tracking-widest">
            Craft your financial future with UPONLY FINSERV Masterful guidance,
            bespoke solutions.
          </p>
        </div>
        <div>
          <h1>Quick Links</h1>
          <div className="text-gray-500 w-40 text-md my-5 tracking-widest">
            <p>About Us</p>
            <p>Services</p>
            <p>contacts</p>
          </div>
        </div>
        <div>
          <h1>Contact Us</h1>
          <div className="text-gray-500 w-64 text-md my-5">
            <p className="flex items-center gap-2">
              <IoCall className="text-gray-500" />
              +91 22 4605 2303
            </p>
            <a className="flex items-center gap-2">
              <IoMail className="text-gray-500" />
              info@uponly.in
            </a>
            <p className="flex gap-2 text-sm">
              <FaLocationDot className="text-gray-500 size-10" />
              M-0042, Ground Floor, Akshar Business Park, Plot no. 3 , Vashi -
              Navi Mumbai-400793 www.uponly.in | info@uponly.in
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <h1>Follow Us</h1>
          <div className="flex gap-5 text-5xl">
            <FaFacebookSquare className="text-blue-400" />
            <FaXTwitter className="text-white" />
            <FaLinkedin className="text-blue-500" />
            <FaInstagram className="text-pink-700" />
          </div>
        </div>
      </div>
      <hr className="bg-slate-600 w-[100%] h-[1px]" />
      <h1 className="text-center text-sm text-gray-500 p-4">
        Powered By UPONLY Technologies
      </h1>
    </div>
  );
};

export default footer;
