"use client";
import React, { useState } from "react";
import { IoMdClock } from "react-icons/io";
import { LiaTelegramPlane } from "react-icons/lia";
import { FiFacebook, FiInstagram, FiPhoneCall } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const navItem = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "News", url: "/news" },
    { name: "Contact", url: "/contact" },
  ];

  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="flex flex-col w-full shadow-lg fixed z-10 bg-white">
      <div className="flex px-[30px] md:px-[130px] justify-between items-center p-4 w-full">
        <Link href="" className="fs-[2rem]">
          Medical Web
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FiPhoneCall size={30} />
            <div>
              <p>345-231-9782</p>
              <p className="text-[12px]">Emergency Phone</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IoMdClock size={40} />
            <div>
              <p>Monday - Friday</p>
              <p className="text-[12px]">9.00 AM - 9.00 PM</p>
            </div>
          </div>
        </div>
        <div className="block sm:hidden" onClick={handleClick}>
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
      <div className="hidden sm:block border-t-[1px] mx-[30px] md:mx-[130px]"></div>
      <div className="hidden sm:flex px-[30px] md:px-[130px] justify-between items-center p-5 w-full">
        <ul className="flex gap-5">
          {navItem.map((link) => (
            <li>
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <Link href="">
            <LiaTelegramPlane size={22} />
          </Link>
          <Link href="">
            <FiFacebook size={22} />
          </Link>
          <Link href="">
            <FiInstagram size={22} />
          </Link>
          <Link href="">
            <AiOutlineLinkedin size={22} />
          </Link>
        </div>
      </div>
      <ul
        className={
          nav
            ? "block absolute bg-white top-[60px] w-full text-center p-6 left-0 shadow-lg ease-in-out duration-300 sm:hidden"
            : "block absolute bg-white top-[60px] w-full text-center p-6 left-[-100%] shadow-lg ease-in-out duration-300 sm:hidden"
        }
      >
        {navItem.map((link) => (
          <li className="mt-4">
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
