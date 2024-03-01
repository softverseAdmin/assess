import React, { useState } from "react";
import { Link } from "react-router-dom";
import { privateLists } from "./lists";
import { FaBookReader } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`absolute left-0 top-0 z-50 flex h-screen w-full bg-slate-900 max-w-xs flex-col overflow-y-hidden shadow  border-r duration-500 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6.5">
        <Link
          className="flex justify-center items-center text-white mt-5 text-2xl gap-2 font-semibold"
          to="/"
        >
          <FaBookReader /> Read & Study
        </Link>
        {/* open sidebar on click */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden text-white"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear p-6">
        <div>
          <h3 className="mb-4 text-xl text-white font-semibold">MENU</h3>
          <ul className="mb-6 flex flex-col gap-1.5">
            {/* <!-- Menu Item Dashboard --> */}

            {privateLists?.map((lists, index) => {
              const { name, url, subMenu, icon } = lists;
              return (
                <NavList
                  key={index}
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                  name={name}
                  url={url}
                  subMenu={subMenu}
                  icon={icon}
                />
              );
            })}
            {/* <!-- Menu Item Dashboard --> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

const NavList = ({ name, url, subMenu, icon, sidebarOpen, setSidebarOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li
        onClick={() => {
          !subMenu?.length && setSidebarOpen(!setSidebarOpen);
          subMenu && setOpen(!open);
        }}
      >
        <Link
          className="flex relative justify-start items-center gap-4 md:gap-2 hover:bg-black p-3 w-full text-xl font-semibold text-white"
          to={url}
        >
          {icon} {name}
          {subMenu?.length !== 0 &&
            (open ? (
              <RiArrowDropUpLine className="absolute right-2" size={30} />
            ) : (
              <RiArrowDropDownLine className="absolute right-2" size={30} />
            ))}
        </Link>
      </li>
      {open &&
        subMenu?.map((menu, index) => {
          const { name, url, icon } = menu;
          return (
            <li
              onClick={() => setSidebarOpen(!setSidebarOpen)}
              className="pl-4"
              key={index}
            >
              <Link
                className=" flex justify-start gap-3 items-center hover:bg-black p-2 w-full text-white text-lg"
                to={url}
              >
                {icon} {name}
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default Sidebar;
