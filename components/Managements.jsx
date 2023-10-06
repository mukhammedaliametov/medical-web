import React from "react";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { managementData } from "@/app/managementData";

const Managements = () => {
  return (
    <div id="managements" className="w-full mx-auto p-8 md:p-16">
      <h1 className="text-center font-montserrat text-2xl">Basqarma</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 md:p-14 gap-4">
        {managementData.map((item) => {
          return (
            <div className="border-[1px] shadow-lg overflow-hidden rounded-[3px] ">
              <div className="overflow-hidden group">
                <Image
                  src={item.img}
                  alt="manage"
                  objectFit="cover"
                  className="group-hover:scale-125 ease-in-out duration-500 w-full"
                />
              </div>
              <div className="py-3 px-4 gap-3">
                <div className="border-b-[2px] w-40 border-[#1F3C88] my-2"></div>
                <p className="flex gap-2 font-montserrat">
                  <FaUserAlt size={20} /> {item.job}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Managements;
