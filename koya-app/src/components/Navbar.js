import { Link } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function ActHandler() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <aside
        className={` ${
          isOpen ? "w-[250px]" : "w-max"
        }  h-screen bg-blue-500 px-5 py-3 transition-all  ease-in-out duration-300`}
      >
        <div
          className={`flex items-center mt-5 ${
            isOpen ? "justify-between" : "justify-center"
          }`}
        >
          {isOpen ? (
            <Link to="/" className="flex items-center text-white text-2xl">
              <FaIcons.FaHive />
              <span className="ml-2">KOYA</span>
            </Link>
          ) : null}
          <button
            className="p-2 bg-blue-300 bg-opacity-50 rounded-md text-white"
            onClick={ActHandler}
          >
            {isOpen ? <FaIcons.FaArrowLeft /> : <FaIcons.FaArrowRight />}
          </button>
        </div>
        <div className="mt-10 bg-white rounded-lg bg-opacity-10 px-2 py-3">
          <ul>
            <li className="py-3 px-2 rounded-lg text-white hover:cursor-pointer hover:bg-white hover:bg-opacity-25">
              <Link to="/" className="flex items-center ">
                <div className="text-white">
                  <FaIcons.FaHome />
                </div>
                {isOpen ? <span className="ml-3">Beranda</span> : null}
              </Link>
            </li>

            <li className="py-3 px-2 rounded-lg text-white hover:cursor-pointer hover:bg-white hover:bg-opacity-25">
              <Link to="/account" className="flex items-center ">
                <div className="text-white">
                  <FaIcons.FaUserCircle />
                </div>
                {isOpen ? <span className="ml-3">Akun</span> : null}
              </Link>
            </li>

            <li className="py-3 px-2 rounded-lg text-white hover:cursor-pointer hover:bg-white hover:bg-opacity-25">
              <Link to="/" className="flex items-center ">
                <div className="text-white">
                  <MdIcons.MdLogout />
                </div>
                {isOpen ? <span className="ml-3">keluar</span> : null}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
