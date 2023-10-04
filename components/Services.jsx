import React from "react";
import { LiaStethoscopeSolid } from "react-icons/lia";
import { FaBaby } from 'react-icons/fa';
import { FaChildren, FaViruses } from 'react-icons/fa6';
import { RiSurgicalMaskLine } from 'react-icons/ri'
import { GiBrokenBone } from 'react-icons/gi';

const page = () => {
  const servicesData = [
    {
      name: "Terapiya bólimi.",
      icon: LiaStethoscopeSolid,
    },
    {
      name: "Balalar bólimi.",
      icon: FaChildren,
    },
    {
      name: "Xirurgiya bólimi.",
      icon: RiSurgicalMaskLine,
    },
    {
      name: "Travmatologiya bólimi",
      icon: GiBrokenBone,
    },
    {
      name: "Tuwılıw bólimi.",
      icon: FaBaby,
    },
    {
      name: "Juqpalı kesellikler bólimi.",
      icon: FaViruses,
    },
  ];

  return (
    <div id="services" className="w-full mx-auto p-8 md:p-16 bg-[#F9F9F9]">
      <h1 className="text-center font-montserrat text-2xl">Xizmetlerimiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
        {servicesData.map((item) => (
          <div className="flex p-4 group items-center cursor-pointer bg-white shadow-xl rounded-[5px] ease-out duration-300 hover:bg-[#1F3C88] hover:text-white">
            <item.icon
              size={70}
              className="text-[#1F3C88] group-hover:text-white"
            />
            <div className="ml-6">
              <p className="text-[1.1rem] font-montserrat">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
