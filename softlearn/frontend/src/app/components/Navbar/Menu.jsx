"use client";
import { protectedNav, publicNav } from "./list";
//import { MdOutlineSecurity } from "react-icons/md";
import Link from "next/link";
//import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
//import { useSelector } from "react-redux";
//import SignOutButton from "../Auth/LogoutButton";

const Menu = () => {
  const isLoggedIn = false;
  //const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="container p-6 mx-auto">
      <div className="flex justify-between">
        <Link
          className="flex gap-1 justify-center items-center pl-6 sm:pl-2"
          href={"/"}
        >
          {/* <MdOutlineSecurity size={30} /> */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold">
              {" "}
              Auth <span className="text-teal-400">Apps</span>{" "}
            </h2>
            <span className="text-xs">Securing IT Solutions</span>
          </div>
        </Link>
        <div className="md:flex gap-2 hidden">
          {!isLoggedIn ? (
            publicNav?.map((list) => {
              const { id, name, url } = list;
              return (
                <Link
                  className=" px-6 py-3 bg-indigo-600 text-white rounded"
                  key={id}
                  href={url}
                >
                  {name}
                </Link>
              );
            })
          ) : (
            <>
              {protectedNav?.map((items) => {
                const { id, name, url } = items;
                return (
                  <Link
                    className=" px-6 py-3 bg-indigo-600 text-white rounded"
                    key={id}
                    href={url}
                  >
                    {name}
                  </Link>
                );
              })}
              {/* <SignOutButton /> */}
            </>
          )}
        </div>
        <MobileMenu
          isMenuOpen={isMenuOpen}
          onDropdownToggle={() => setIsDropdownOpen(!isDropdownOpen)}
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          isDropdownOpen={isDropdownOpen}
        />
      </div>
    </div>
  );
};

export default Menu;
