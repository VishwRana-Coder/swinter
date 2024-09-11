"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShadcnButton } from "./ui/button";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoShareSocial } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";
import { getPosts } from "@/actions/postActions";
import Image from "next/image";



const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      if (res.data) {
        setPosts(res.data);
      } else if (res.errMsg) {
        setError(res.errMsg);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const mainPosts = [...posts].reverse();

  return (
    <div>
      {mainPosts.length > 0 ? (
        posts.map((item) => (
          <main
            key={item._id}
            className="bg-[#F1F1F1] flex md:w-[70%] w-[80%] border border-[#d6d6d6] rounded-lg flex-col mb-10 text-[14px]"
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

            {/* Render textValue as HTML content */}
            <div className="text-left px-5 pt-3">{item.textValue}</div>

            <div className="flex justify-end pt-2 px-5 text-[rgb(65,65,65)]">
              {item.timeStamp}
            </div>

            {/* Swiper for images */}
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
        ))
      ) : (
        <div>No posts available</div>
      )}
    </div>
  );
};

export default Feed;
