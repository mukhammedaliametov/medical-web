import React from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Button from "@/components/Button";
import Img from "@/public/hero-bg.jpg";

const page = () => {
  return (
    <>
      <PageTitle page="" link="Biz haqqımızda" url="" />
      <div className="w-full p-8 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:hidden">
            <Image src={Img} alt="" />
          </div>
          <div className="">
            <h1 className="text-2xl font-montserrat">
              Moynaq rayonı medecina birlespesi
            </h1>
            <div className="border-b-[5px] border-[#1F3C88] w-[50%] my-4"></div>
            <p className="py-2 font-poppins">
              Oraylıq kóp tarmaqlı
              poliklinika, 31, 32, 33 Shańaraqqa tiyisli poliklinika, Úsh-Say,
              Qazaq dárya, Qızıl -jar Shańaraqqa tiyisli shıpaker punkti tárepinen
              joqarı sapalı hám maman medicinalıq xızmet kórsetiledi.
            </p>
            <p className="py-2 font-poppins mb-3">
              Moynaq rayon oraylıq kóp tormoqli poliklinikası bir smenada 785
              reyske arnalǵan. Poliklinikada 23 túrdegi qánige shıpakerler hám
              qosımsha Rentgen, EKG, UTT, FGDS hám Fizioterapiya apparatları
              bar. Rayon poliklinikasında 34 medicinalıq brigada aktivyati yolga
              qoyilgan. Medicinalıq brigade quramında 1 dana Shańaraqqa tiyisli
              shıpaker, 2 patranaj xamshira, 1 ámeliyatshı xamshira hám
              akusherka iskerlik kórsetiledi.
            </p>
            <Button name="Bas betke qaytıw" url="/" />
          </div>
          <div className="hidden lg:block">
            <Image src={Img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
