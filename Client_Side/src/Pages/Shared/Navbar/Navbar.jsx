import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  FaArrowRightToBracket,
  FaCodeCompare,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa6";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { BsBagPlus } from "react-icons/bs";
import logo from "../../../assets/LOGO/LOGO.png";
import { RxCross2 } from "react-icons/rx";
import { MdArrowForwardIos, MdDashboard } from "react-icons/md";
// import { LuUser2 } from "react-icons/lu";
const Navbar = () => {
  const { user, logOut, loading } = false;
  const [letter, setLetter] = useState("");
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/" && window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (user && user.email) {
      const firstLetter = user.email.charAt(0).toUpperCase();
      setLetter(firstLetter);
    }
  }, [user]);

  const handleSignOut = () => {
    logOut();
  };

  return (
    <div className="bg-white">
      <nav
        className={`w-[100%] fixed bg-white  border-b  z-50 mx-auto ${
          location.pathname === "/" ? (scrolled ? "shadow-sm" : "") : "shadow"
        } text-black`}
      >
        <div className="mx-auto ">
          {loading ? (
            <p>....</p>
          ) : (
            <div className="z-50  bg-white  py-3  md:py-1 flex justify-between items-center ">
              <Link to="/" className="flex items-center  ">
               <h2>VocabJp</h2>
              </Link>

              <div className="flex  items-center space-x-5">
                <div className="hidden md:flex gap-5 items-center">
                  <Link>asf</Link>
                </div>

                {/* User */}
                <div className="flex items-center justify-center gap-3">
                  {user ? (
                    <>
                      {currentUser[0]?.role === "admin" ? (
                        <Link to="admin/dashboard">
                          <div className="secondaryColor">
                            <MdDashboard size={22} />
                          </div>
                        </Link>
                      ) : (
                        <>
                          <Link to="user/dashboard">
                            <div className="secondaryColor">
                              <MdDashboard size={22} />
                            </div>
                          </Link>
                        </>
                      )}

                      <button
                        onClick={handleSignOut}
                        className="border border-slate-200 hover:border-[#398EFA] rounded-md flex gap-1 items-center bg-[#f50400] hover:bg-transparent hover:text-[#398EFA] px-3 py-1 transition-all duration-300 ease-in-out"
                      >
                        <LuUser2 size={18} />
                        <p className="font-bold uppercase text-[15px]">
                          Logout
                        </p>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to={"/signin"}>
                        <button className="border ml-2 border-slate-200 hover:border-[#398EFA] rounded-md flex gap-1 items-center bg-[#f50400] hover:bg-transparent hover:text-[#398EFA] px-3 py-1 transition-all duration-300 ease-in-out">
                          {/* <LuUser2 size={18} /> */}
                          <p className="font-bold uppercase text-[15px]">
                            Login
                          </p>
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>

              {/* Mobile Device */}
              <div onClick={handleNav} className="block  md:hidden">
                {nav ? (
                  <p />
                ) : (
                  <div className="flex items-center gap-2 font-semibold">
                    <HiOutlineMenuAlt3
                      size={30}
                      className="text-black cursor-pointer"
                    />
                  </div>
                )}
              </div>
              <div
                className={
                  nav
                    ? "fixed right-0  top-0 w-full overflow-auto  h-full text-center md:hidden bg-white  border-r-gray-900 ease-in-out duration-500"
                    : "ease-in-out duration-500 w-full h-full top-0 fixed overflow-auto right-[-100%]"
                }
              >
                <div className="px-5 text-left pb-16">
                  <div className="flex items-center justify-between py-3 ">
                    <Link to="/" className="">
                      <img className="w-1/3" src={logo} alt="" />
                      {/* <h2 className="text-2xl text-black font-semibold ">MernShop</h2> */}
                    </Link>
                    <button onClick={handleNav}>
                      <RxCross2
                        size={40}
                        className="primaryColor cursor-pointer hover:text-white border p-2 transition-background transition-text  duration-300 ease-in-out  hover:bg-[#F62977] rounded-full "
                      />
                    </button>
                  </div>
                  <div className="flex flex-col justify-center items-start pt-10 font-medium space-y-3 ">
                    {/* <MobileDropDown name="Mens's" items={MensItems} />
                      <MobileDropDown name="Womens's" items={WomensItems} />
                      <MobileDropDown name="Kid's" items={KidsItems} /> */}
                  </div>
                  <button className="bg-[#F50963] mt-8 flex gap-2 items-center px-5 py-3">
                    <p className=" font-medium">Getting Started </p>
                    <MdArrowForwardIos size={20} />
                  </button>
                  {/*  */}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            {isSidebarOpen && (
              <div className="fixed top-0 bottom-0 flex justify-end left-0 right-0 bg-black bg-opacity-50 z-50 transition-opacity ease-in-out duration-500">
                <div
                  className={`w-[360px]   bg-white h-full  transform transition-transform duration-500 ease-in-out ${
                    isSidebarOpen
                      ? "translate-x-0 overflow-auto bg-white transition-all duration-700 ease-in-out"
                      : "translate-x-full transition-all bg-white 0.3s ease-in-out"
                  }`}
                >
                  <div className="flex justify-between p-5">
                    <h2 className="text-base font-medium">SHOPPING CART</h2>
                    <button
                      className="flex items-center gap-2 hover:text-blue-500"
                      onClick={toggleSidebar}
                    >
                      <span className="text-base">close</span>
                      <FaArrowRightToBracket size={20} />
                    </button>
                  </div>
                  <div className="mt-32 border-b-2 pb-7 flex px-10 items-center flex-col justify-center ">
                    <img
                      className="p-2"
                      src="https://i.ibb.co/8XZwct2/empty-cart.png"
                      alt=""
                    />
                    <p className="py-5 font-medium ">Your Cart is empty</p>
                    <button className="primaryButton w-[140px]">
                      Go To Shop
                    </button>
                  </div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  alias! Nobis provident sunt quod architecto tenetur
                  praesentium, doloremque quos neque quaerat repellendus id
                  accusamus pariatur ratione magnam accusantium ipsam animi?
                  Voluptatum neque sapiente officiis dolor tempore et, magnam
                  vel quia! Quos fugiat neque fuga quaerat vitae ducimus sunt
                  est impedit reprehenderit, a quae aut accusamus maxime magnam
                  suscipit veritatis, odit odio accusantium laboriosam quisquam
                  voluptates. Eos odit accusantium saepe cumque unde excepturi
                  nulla provident labore quia, pariatur impedit, numquam ab
                  veniam debitis perferendis corrupti! Quis minima, quas eaque
                  quibusdam perferendis dolorem non adipisci molestiae corrupti
                  a earum, doloremque, aperiam culpa provident hic. Illum
                  officia deserunt non ea corporis temporibus dolore repellat
                  aliquid nesciunt dignissimos? Quas nisi pariatur
                  necessitatibus sunt sit vitae dicta at quaerat impedit officia
                  illum nam et, dolores qui commodi ipsam, sequi, minima eius
                  totam veritatis soluta! Libero placeat blanditiis porro cumque
                  animi tempora soluta sunt, minus eum?
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
