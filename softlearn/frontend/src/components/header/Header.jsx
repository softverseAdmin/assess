import React from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky bg-sky-400 p-6 top-0 z-999 flex w-full drop-shadow-1">
      <div className="flex flex-1 justify-between items-center">
        <div>hello</div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
          }}
          className="block rounded-sm  p-1.5  lg:hidden"
        >
          {sidebarOpen ? (
            <RxCross2 className="bg-none" size={32} />
          ) : (
            <RxHamburgerMenu className="bg-none" size={32} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
