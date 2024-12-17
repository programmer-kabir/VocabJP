import React, { useState } from "react";
import useAuth from "../Utils/Hooks/useAuth";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
const ImageDropdown = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const handleSignOut = () => {
    logOut();
  };
  const getUserInitial = () => {
    if (user?.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    return "U"; // Default initial if displayName is not available
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div
          onClick={() => setOpen(!open)}
          className={`relative  cursor-pointer ${
            open ? "border-indigo-700 transform transition duration-300" : ""
          }`}
        >
          <div className="">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white font-semibold text-xl">
                  {getUserInitial()}
                </span>
              )}
            </div>
          </div>
          {open && (
            <div className="absolute w-60 right-2 px-5 py-3  bg-white rounded-lg shadow border  mt-3">
              <ul className="space-y-3 text-black">
                <li className="font-medium">
                  <Link className="flex hover:text-[#398EFA] items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-[#f50963]">
                    <div className="mr-3">
                      <FaRegUser className="w-6 h-6" />
                    </div>
                    Account
                  </Link>
                </li>
                <li className="font-medium">
                  <Link className="flex hover:text-[#398EFA] items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-[#f50963]">
                    <div className="mr-3">
                      <MdOutlineDashboardCustomize className="w-6 h-6" />
                    </div>
                    Dashboard
                  </Link>
                </li>
                <hr className="dark:border-gray-700" />
                <li className="font-medium">
                  <div
                    onClick={handleSignOut}
                    className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-[#f50963]"
                  >
                    <div className="mr-3 text-[#f50963]">
                      <TbLogout className="w-6 h-6" />
                    </div>
                    Logout
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageDropdown;
