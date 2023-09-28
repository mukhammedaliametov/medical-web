"use client";
import React, { useState, useEffect } from "react";
import { IoMdClock } from "react-icons/io";
import { LiaTelegramPlane } from "react-icons/lia";
import { FiFacebook, FiInstagram, FiPhoneCall } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navItem = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Managements", url: "/managements" },
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

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div className="flex flex-col shadow-lg z-10 bg-white w-full">
      <div className="flex justify-between items-center px-[30px] md:px-[50px] py-3">
        <Link
          href=""
          className="flex items-center gap-4 text-2xl cursor-pointer font-bold"
        >
          <Image
            src="https://ssv.uz/assets/public/images/logo.svg"
            alt=""
            width="80"
            height="10"
          />
          Muynak-RMB
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
            <FiPhoneCall size={30} />
            <div>
              <Link href="tel: 345-231-9782">345-231-9782</Link>
              <p className="text-[12px]">Emergency Phone</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <IoMdClock size={40} />
            <div>
              <p>Monday - Friday</p>
              <p className="text-[12px]">9.00 AM - 9.00 PM</p>
            </div>
          </div>
        </div>
        <div className="block md:hidden" onClick={handleClick}>
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
      <div className="block border-t-[1px] mx-[30px] md:mx-[130px]"></div>
      <div className="flex px-[30px] md:px-[50px] justify-center md:justify-between items-center p-5 w-full">
        <ul className="hidden md:flex gap-5">
          {navItem.map((link) => (
            <li>
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <div className="border-r-[1px] pr-3">
            <p className='font-bold'>
              {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
            </p>
          </div>
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
            ? "block absolute bg-white top-[96px] w-full text-center p-6 left-0 shadow-lg ease-in-out duration-300 md:hidden z-10"
            : "block absolute bg-white top-[96px] w-full text-center p-6 left-[-100%] shadow-lg ease-in-out duration-300 md:hidden z-10"
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
