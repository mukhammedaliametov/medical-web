import React from "react";
import Link from "next/link";
import { LiaTelegramPlane } from "react-icons/lia";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";
import { pageItems } from "@/app/pageItems";

const Footer = () => {
  return (
    <div className="p-6 bg-[#252A2E] text-white">
      <div className="flex flex-col md:hidden p-2 px-4">
        <Logo />
        <div className="flex flex-col">
          <ul className="flex flex-col gap-5 m-3 pb-4">
            {pageItems.map((link) => {
              return (
                <li key={link} className="font-montserrat">
                  <Link href={link.url}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="flex lg:border-l-[2px] border-white pl-4 gap-4 pb-5">
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
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center pb-4 lg:pb-0">
        <Logo />
        <div className="flex">
          <ul className="flex gap-5 pr-4">
            {pageItems.map((link) => {
              return (
                <li key={link} className="font-montserrat">
                  <Link href={link.url}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="lg:flex lg:border-l-[2px] border-white pl-4 gap-4 hidden">
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
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-white lg:mx-[120px]"></div>
      <div className="mt-5 py-3 ml-6">
        <p>
          Web-Sayt{" "}
          <Link href="" className="underline underline-offset-4">
            Khodjeli IT Academy 
          </Link>{" "}
          tárepinnen islep shıǵarılǵan
        </p>
      </div>
    </div>
  );
};

export default Footer;
