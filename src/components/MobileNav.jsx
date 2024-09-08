import React from 'react'

//Importing Icons
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosMenu } from 'react-icons/io';

//Importing Components
import { Sheet, SheetContent, SheetDescription, SheetTrigger, SheetHeader } from './ui/sheet';
import Link from 'next/link';


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
      <nav className='h-[60px] flex items-center justify-between container px-5 fixed bg-white'>
        <div>
          <h1 className="text-3xl">
            Swinter<span className="text-blue-600">.</span>
          </h1>
        </div>
        <div>
        <Sheet>
          <SheetTrigger>
            <IoIosMenu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="mt-10">
                  <h1 className="text-4xl">
                    Nexter
                    <span className="text-light-accent dark:text-dark-accent">
                      .
                    </span>
                  </h1>
                </div>
                <ul className="text-left mt-10">
                  {nav_items.map((item, index) => {
                    return (
                      <Link
                        href={item.path}
                        className="flex items-center flex-col"
                      >
                        <span className="text-xl">{item.icons}</span>
                        <li
                          className={`font-medium text-3xl mb-5`}
                          key={index}
                        >
                          {item.name}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        </div>
      </nav>
    </div>
  )
}

export default MobileNav