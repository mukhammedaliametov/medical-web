"use client";
import React, { useState, useEffect } from "react";
import { LiaTelegramPlane, LiaTimesSolid, LiaBarsSolid } from "react-icons/lia";
import { FiFacebook, FiInstagram, FiPhoneCall } from "react-icons/fi";
import { FaLinkedin } from 'react-icons/fa'
import { BsClock } from 'react-icons/bs'
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
  }, [])

  return (
    <div className="flex flex-col shadow-lg z-10 bg-[#F2F4F6] w-full">
      <div className="flex justify-between items-center px-[30px] md:px-[50px] 2xl:px-[80px] py-3">
        <Link
          href=""
          className="flex items-center gap-4 text-2xl cursor-pointer font-montserrat"
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
            <FiPhoneCall size={30} color="blue" />
            <div>
              <Link href="tel: 345-231-9782">345-231-9782</Link>
              <p className="text-[12px]">Emergency Phone</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <BsClock size={30} color="blue" />
            <div>
              <p>Monday - Friday</p>
              <p className="text-[12px]">9.00 AM - 9.00 PM</p>
            </div>
          </div>
        </div>
        <div className="block md:hidden" onClick={handleClick}>
          {nav ? <LiaTimesSolid size={25} /> : <LiaBarsSolid size={25} />}
        </div>
      </div>
      <div className="bg-[#1F3C88] text-white flex px-[30px] md:px-[60px] 2xl:px-[80px] justify-center md:justify-between items-center p-5 w-full">
        <ul className="hidden md:flex gap-5">
          {navItem.map((link) => (
            <li>
              <Link className="hover:text-blue" href={link.url}>{link.name}</Link>
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
            <FaLinkedin size={22} />
          </Link>
          <div className="sm:block md:hidden lg:block border-l-[1px] pl-3">
            <p className='font-bold'>
              {time.getHours()}:{time.getMinutes()} - {time.getDate()} - {time.getMonth() + 1}
            </p>
          </div>
        </div>
      </div>
      <ul
        className={
          nav
            ? "block absolute bg-[#F2F4F6] top-[96px] w-full text-center p-6 left-0 shadow-lg ease-in-out duration-300 md:hidden z-10"
            : "block absolute bg-[#F2F4F6] top-[96px] w-full text-center p-6 left-[-100%] shadow-lg ease-in-out duration-300 md:hidden z-10"
        }
      >
        {navItem.map((link) => (
          <li className="mt-4" onClick={closeNav}>
            <Link className="text-[1.2rem]" href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
