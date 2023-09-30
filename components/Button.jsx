import React from 'react';
import Link from 'next/link';

const Button = ({name, url}) => {
  return (
    <Link href={url} className='bg-[#1F3C88] text-white font-montserrat px-3 md:px-6 py-3 md:py-4 rounded-[5px]'>
      {name}
    </Link>
  );
};

export default Button;