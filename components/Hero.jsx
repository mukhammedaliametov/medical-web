import React from "react";
import Image from "next/image";
import heroBg from "@/public/hero-bg.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex justify-center w-full h-screen bg-center bg-cover relative ">
      <Image
        src={heroBg}
        layout="fill"
        objectFit="cover"
        alt="bg"
        className="-z-10"
      />
      <div className="bg-black/70 top-0 bottom-0 left-0 right-0 absolute -z-10"></div>
      <div className="b-t-[1px] text-white mt-[10rem] lg:ml-[-14rem] 2xl:mt-[15rem] px-[25px]">
        <div className="border-t-[5px] border-[#1F3C88] mb-3 w-[10%]"></div>
        <h1 className="text-3xl md:text-4xl font-montserrat py-1">Moynaq rayonı <br /> medecina birlespesi</h1>
        <p className="font-poppins text-[1.2rem] mb-[15px]">Moynaq rayonı medicina birlespesi quramında 105 - orınlı xızmet kórsetedi. <br /> Orta medicina xızmetkerleri 314-dana bolıp, sonnan 61 danası ilmiy tájriybe qatlamına iye.</p>
        <Button name="Tolıq mag'lıwmat" url='/about' />
      </div>
    </div>
  );
};

export default Hero;
