import React, { useState, useEffect } from "react";
import { Menu, DeleteCircle } from "iconoir-react";
import { Link } from "react-router-dom";
import "./navBar.css";
import { GetNewsService } from "../../services/ApiService";
import { useAuth } from "../../context/AuthContext";

const Links = [
  { name: "Home", link: "/news" },
  { name: "Collection", link: "/collection" },
  { name: "LogIn", link: "/" },
  //{ name: "JOIN US", link: "/create" },
  { name: "LogOut", link: "/", onClick: (event) => logout(event) },
];

function Navbar() {
  let [open, setOpen] = useState(false);
  const { user, logout } = useAuth(); // Get the user from the AuthContext
  useEffect(() => { }, [user]);


  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-indigo-300 navContainer">
      <div className="flex items-center justify-between">
        <div className="items-center ml-7">NewsApp</div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-6 top-2 cursor-pointer md:hidden"
        >
          <div className="">{open ? <DeleteCircle /> : <Menu />}</div>
        </div>
        <ul
          className={`md:flex bg-indigo-300 py-4 gap-7 mb-4 md:items-center justify-end mr-7
                md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
                ${open ? "top-20" : "top-[-90px]"}`}
        >
          {Links.map((link) => {
            if (link.name === "LogOut") {
              return (
                <button
                  onClick={logout}
                  className={`text-gray-800 hover:text-gray-400 duration-100 flex border-0 ${(!user && (link.name === 'Home' || link.name === 'Collection')) ? 'pointer-events-none opacity-50' : ''}`}
                  key={link.name}
                >
                  {link.name}
                </button>
              );
            } else {
              return (
                <Link
                  className={`text-gray-800 hover:text-gray-400 duration-100 flex ${(!user && (link.name === 'Home' || link.name === 'Collection')) ? 'pointer-events-none opacity-50' : ''}`}
                  to={link.link}
                  key={link.name}
                >
                  {link.name}
                </Link>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;