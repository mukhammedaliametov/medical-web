import React from "react";
import PageTitle from "@/components/PageTitle";
import YandexMap from "@/components/YandexMap";
import Link from "next/link";

const page = () => {
  return (
    <>
      <PageTitle page="" link="Baylanıs" url="" />
      <YandexMap />
      <div className="w-full mx-auto p-8 md:p-16 bg-[#F9F9F9]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ">
          <div>
            <p className="text-[1.1rem] font-realway">Mánzil</p>
            <div className="border-t-[1px] border-[#1F3C88] my-1 w-40"></div>
            <p>13 Jiymemuratova, Muynak district, Karakalpakstan</p>
          </div>
          <div>
            <p className="text-[1.1rem] font-realway">Múrájat ushın telefon</p>
            <div className="border-t-[1px] border-[#1F3C88] my-1 w-40"></div>
            <Link href='tel: +998(55)104-63-17'>+998(55)104-63-17</Link>
          </div>
          <div>
            <p className="text-[1.1rem] font-realway">Baǵdarlamashı</p>
            <div className="border-t-[1px] border-[#1F3C88] my-1 w-40"></div>
            <Link href='tel: +998(94)833-06-81'>+998(94)833-06-81</Link>
          </div>
          <div>
            <p className="text-[1.1rem] font-realway">Email mánzil</p>
            <div className="border-t-[1px] border-[#1F3C88] my-1 w-40"></div>
            <p>gulshexrautewlieva716@gmail.com</p>
          </div>
          <div>
            <p className="text-[1.1rem] font-realway">Jumıs waqtı</p>
            <div className="border-t-[1px] border-[#1F3C88] my-1 w-40"></div>
            <p>Dúyshembi - Shembi, 8.00 - 20.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
