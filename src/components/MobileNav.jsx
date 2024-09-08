import React from 'react'

//Importing Icons
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


//Importing Components
import { Sheet, SheetContent, SheetDescription, SheetTrigger, SheetTitle } from './ui/sheet';



const MobileNav = () => {
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
    <div>

    </div>
  )
}

export default MobileNav