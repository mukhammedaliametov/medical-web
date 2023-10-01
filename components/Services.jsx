import React from "react";
import { LiaStethoscopeSolid, LiaFileMedicalAltSolid } from "react-icons/lia";
import { FaHandHoldingMedical, FaBriefcaseMedical } from 'react-icons/fa';
import { CiMedicalClipboard } from 'react-icons/ci';
import { GiConfirmed } from 'react-icons/gi';

const page = () => {
  const servicesData = [
    {
      name: "This is a services Lorem, ipsum dolor.",
      icon: LiaStethoscopeSolid,
    },
    {
      name: "This is a services Lorem, ipsum dolor.",
      icon: LiaFileMedicalAltSolid,
    },
    {
      name: "This is a services Lorem, ipsum dolor.",
      icon: FaHandHoldingMedical,
    },
    {
      name: "This is a services Lorem, ipsum dolor.",
      icon: FaBriefcaseMedical,
    },
    {
      name: "This is a services Lorem, ipsum dolor.",
      icon: CiMedicalClipboard,
    },
    {
      name: "This is a services Lorem, ipsum dolor.",
      icon: GiConfirmed,
    },
  ];

  return (
    <div id="services" className="w-full mx-auto p-8 md:p-16 bg-[#F9F9F9]">
      <h1 className="text-center font-montserrat text-2xl">Our Services</h1>
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
