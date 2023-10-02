"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import client from "../client";
import PageTitle from '@/components/PageTitle';

const page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <PageTitle page='' link='News' url='' />
    <div className="max-w-[1400px] mx-auto p-8 lg:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.slug.current}>
            <div
              className="flex flex-col shadow-lg border-[1px] rounded-xl overflow-hidden"
            >
              <div className="relative overflow-hidden group">
                <Image
                  className="group-hover:scale-125 ease-in-out z-2 duration-150 cursor-pointer"
                  width="600"
                  height="100"
                  src={post.mainImage.asset.url}
                  alt="card-img"
                />
                <div className="hidden items-center justify-center group-hover:flex absolute z-2 hover:bg-black/60 text-white top-0 left-0 right-0 bottom-0">
                  <Link href={`/news/${post.slug.current}`} className="hidden group-hover:block">
                    View Post
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <h1
                  href=""
                  className="text-[1.3rem] font-montserrat py-2"
                >
                  {post.title}
                </h1>
                <p className="border-t-[3px] border-[#1F3C88] mb-2 w-[20%]"></p>
                <p className="pb-4 text-[1.2rem] flex items-center group cursor-pointer text-[#1F3C88]">
                  <Link href={`/news/${post.slug.current}`}>See moree</Link>
                  <AiOutlineArrowRight
                    size={21}
                    className="ml-2 group-hover:ml-6 ease-out duration-300"
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default page;
