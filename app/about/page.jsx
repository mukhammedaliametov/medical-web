import React from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Button from "@/components/Button";
import Img from '@/public/hero-bg.jpg';

const page = () => {
  return (
    <>
      <PageTitle page="" link="About" url="" />
      <div className="w-full p-8 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:hidden">
            <Image src={Img} alt='' />
          </div>
          <div className="">
            <h1 className="text-2xl font-montserrat">Ministry of Health of the Republic of Uzbekistan</h1>
            <div className="border-b-[5px] border-[#1F3C88] w-[50%] my-4">

            </div>
            <p className="py-2 font-poppins">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              modi optio in adipisci. Doloremque ex perspiciatis nemo dolore
              excepturi ea delectus facere. Recusandae, ex excepturi asperiores
              ad incidunt eveniet inventore!
            </p>
            <p className="py-2 font-poppins mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              autem sit expedita, consequuntur repellat fuga enim eum, assumenda
              praesentium est eveniet qui fugiat vero veritatis commodi dicta
              beatae repudiandae nostrum!
            </p>
            <Button name='Back To Home Page' url='/' />
          </div>
          <div className="hidden lg:block">
            <Image src={Img} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
