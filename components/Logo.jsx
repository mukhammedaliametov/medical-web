import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Logo = () => {
  return (
    <Link
      href=""
      className="flex items-center gap-4 text-1xl cursor-pointer font-montserrat"
    >
      <Image
        src="https://ssv.uz/assets/public/images/logo.svg"
        alt=""
        width="80"
        height="10"
      />
      Moynaq rayonı <br /> medecina birlespesi
    </Link>
  );
};

export default Logo;
