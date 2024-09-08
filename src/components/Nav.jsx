import React from "react";

//Importing Icons
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

//Importing Components
import Link from "next/link";

const Nav = () => {
  const nav_items = [
    {
      name: "Home",
      path: "/home",
      icons: <FaHome />,
    },
    {
      name: "Notifications",
      path: "/notification",
      icons: <FaBell />,
    },
    {
      name: "Chats",
      path: "/chat",
      icons: <IoChatbox />,
    },
    {
      name: "Profile",
      path: "/profile",
      icons: <FaUser />,
    },
    {
      name: "Settings",
      path: "/settings",
      icons: <IoMdSettings />,
    },
  ];
  return (
    <div className="w-full">
      <nav className="container flex justify-between h-[60px] items-center">
        <div>
          <h1 className="text-3xl">
            Swinter<span className="text-blue-600">.</span>
          </h1>
        </div>
        <div></div>
        <div className="flex md:gap-2 lg:gap-5 items-center">
          <ul className="flex gap-10 text-black/60 mr-10">
            {nav_items.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className="flex items-center flex-col"
                >
                  <span>{item.icons}</span>
                  <li>{item.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
