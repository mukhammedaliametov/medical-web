"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { useParams } from "next/navigation";
import client from "../../client";
import { PortableText } from "@portabletext/react";
import PageTitle from "@/components/PageTitle";

const page = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
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
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <PageTitle page={singlePost.title} link="News" url="/news" />
          <div className="max-w-[1400px] mx-auto p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-10">
              <div>
                {singlePost.mainImage && singlePost.mainImage.asset && (
                  <Image
                    src={singlePost.mainImage.asset.url}
                    alt=""
                    width="600"
                    height="100"
                    className="rounded-2xl"
                  />
                )}
              </div>
              <div className="">
                <h1 className="text-2xl font-bold font-montserrat">
                  {singlePost.title}
                </h1>
                <p className="my-[16px] font-poppins">
                  <PortableText value={singlePost.body} />
                </p>
                <Button name="View posts page" url="/news" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default page;
