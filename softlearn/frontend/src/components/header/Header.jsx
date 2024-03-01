import React from "react";
import { Link } from "react-router-dom";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";

const lists = [
  {
    title: "Profile",
    url: "/menu/profile",
    icon: React.createElement(CgProfile),
  },
  {
    title: "Setting",
    url: "/menu/tables",
    icon: React.createElement(MdDashboard),
  },
  {
    title: "Logout",
    url: "/menu/charts",
    icon: React.createElement(MdDashboard),
  },
  {
    title: "Logout",
    url: "/menu/charts",
    icon: React.createElement(MdDashboard),
  },
];

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky bg-white p-4 top-0 z-999 flex w-full drop-shadow-1">
      <div className="flex flex-1 justify-between items-center">
        <h2 className="text-2xl font-bold hidden lg:block">SoftLearn</h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
          }}
          className="block rounded-sm p-1.5 lg:hidden"
        >
          {sidebarOpen ? (
            <RxCross2 className="bg-none" size={32} />
          ) : (
            <RxHamburgerMenu className="bg-none" size={32} />
          )}
        </button>
        <div className="flex relative flex-1 justify-end px-4">
          <button
            onClick={() => setOpen(!open)}
            className="flex justify-center items-center gap-2"
          >
            <img
              src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png"
              alt=""
              className="w-[50px] h-[50px] p-1 rounded-full border"
            />
            <RiArrowDropDownLine size={30} />
          </button>
          {open && (
            <div className="absolute border w-[200px] bg-white p-4 rounded flex flex-col z-20 shadow-lg top-16">
              {lists?.map((list, index) => {
                const { title, url, icon } = list;
                return (
                  <Link
                    onClick={() => setOpen(!open)}
                    className="p-2 flex gap-2 delay-100 border hover:border-teal-300 transition-all ease-in-out duration-500 hover:bg-black hover:text-white items-center bg-zinc-50 m-2"
                    to={url}
                    key={index}
                  >
                    {icon} {title}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
