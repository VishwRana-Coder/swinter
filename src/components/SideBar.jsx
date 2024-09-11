"use client";

//Importing Components
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getData } from "@/db/FirebaseDB";
import Loading from "./Spin";
import WritePost from "./WritePostModal";

// Importing Icons
import { FaHome, FaBell, FaUser } from "react-icons/fa";
import { IoMdSettings, IoIosMenu } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";

const SideBar = () => {
  const nav_items = [
    { name: "Home", path: "/home", icons: <FaHome /> },
    { name: "Notifications", path: "/notification", icons: <FaBell /> },
    { name: "Chats", path: "/chat", icons: <IoChatbox /> },
    { name: "Profile", path: "/profile", icons: <FaUser /> },
    { name: "Settings", path: "/settings", icons: <IoMdSettings /> },
  ];
  const pathName = usePathname();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getData();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        
        <>
        <div className="md:border-[#d6d6d6] border-r-2 pl-3 px-3 h-[90vh] top-0 hidden md:block">
          {/* Logo */}
          <Link href={"/home"}>
            <div>
              <h1 className="text-5xl text-center md:text-left">
                Swinter
                <span className="text-blue-600">.</span>
              </h1>
            </div>
          </Link>
          <Link href={"/profile"}>
            <div className="bg-[#fafafa] rounded-[10px] flex items-center mt-5 justify-center space-x-2 py-2 border border-[#b7b7b7]">
              <Image
                src={
                  userData.userPhoto
                }
                alt="User Image"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="text-xl font-medium">{userData.userName}</h3>
            </div>
          </Link>
          <div className="mt-3">
            <WritePost />
          </div>
          <ul className="mt-10">
          {nav_items.map((item, index) => (
            <Link href={item.path} key={index}>
              <li
                className={`mt-3 h-[50px] font-semibold rounded-xl flex justify-center items-center ${
                  item.path === pathName && "text-[#F8FAFC] bg-[#0F172A]"
                }`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        </div>
        <div className="flex md:hidden">
          Hello
        </div>
        </>
      ) : (
        <>
            <Loading />
        </>
      )}
    </div>
  );
};

export default SideBar;
