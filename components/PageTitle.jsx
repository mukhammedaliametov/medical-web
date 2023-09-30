import React from "react";
import Image from "next/image";
import TextBg from "@/public/page-text-bg.jpg";
import Link from "next/link";

const PageTitle = ({ page, link, url }) => {
  return (
    <div className="w-[100%] h-[150px] lg:h-[200px] overflow-hidden bg-center bg-cover bg-fixed relative">
      <Image
        src={TextBg}
        alt="textBgImage"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/30 -z-10"></div>
      <div className="flex ml-[10%] mt-[56px] lg:mt-[70px] font-montserrat text-white">
        <Link className="text-[1.2rem] md:text-[2.1rem] border-r-[3px] pr-5" href={url}>
          {link}
        </Link>
        <h1 className="text-[1.2rem] md:text-[2.1rem] pl-5">{page}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
