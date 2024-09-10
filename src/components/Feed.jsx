"use client";
// Importing Components
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Swiper from "swiper";
import { ShadcnButton } from "./ui/button";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoShareSocial } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/posts");
        const result = await response.json();
        setPosts(result.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const mainPosts = [...posts].reverse();

  return (
    <div>
      {posts.length > 0 ? (
        <>
          {mainPosts.map((item, index) => (
            <main
              key={index}
              className="bg-[#f7f7f7] flex md:w-[80%] w-[80%] border border-[#d6d6d6] rounded-[7px] flex-col mb-10 text-[14px]"
            >
              <Link href="">
                <div className="flex items-center gap-2 px-5 pt-2">
                  {/* Image */}
                  <div>
                    <Image
                      src={item.userPhoto}
                      alt="User"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  {/* Name */}
                  <div className="font-medium">{item.userName}</div>
                </div>
              </Link>

              <div className="text-left mt-3 px-5">
                {item.textValue}
              </div>

              <div className="flex justify-end pt-2 px-5 text-[rgb(65,65,65)]">
                {item.timeStamp}
              </div>
              <div></div>
              {/* Buttons */}
              <div className="flex md:gap-1 gap-2 lg:gap-3 justify-center mb-5 md:mt-10">
                <ShadcnButton className="gap-1 text-[8px] lg:text-[15px] md:text-[10px] flex flex-col md:flex-row h-[auto]">
                  <AiOutlineLike /> Like
                </ShadcnButton>
                <ShadcnButton className="gap-1 text-[8px] lg:text-[15px] md:text-[10px] flex flex-col md:flex-row h-[auto]">
                  <AiOutlineDislike /> Dislike
                </ShadcnButton>
                <ShadcnButton className="gap-1 text-[8px] lg:text-[15px] md:text-[10px] flex flex-col md:flex-row h-[auto]">
                  <IoShareSocial /> Share
                </ShadcnButton>
                <ShadcnButton className="gap-1 text-[8px] lg:text-[15px] md:text-[10px] flex flex-col md:flex-row h-[auto]">
                  <FaRegCommentDots /> Comment
                </ShadcnButton>
              </div>
            </main>
          ))}
        </>
      ) : (
        <>No posts available</>
      )}
    </div>
  );
};

export default Feed;
