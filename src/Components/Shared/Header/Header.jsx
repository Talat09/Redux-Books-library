import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiXMark, HiBars4 } from "react-icons/hi2";

import "./Header.css";
const Header = () => {
  const [scrollDown, setScrollDown] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [open, setOpen] = useState(false);
  const menu = (
    <>
      <li className="me-6 py-1 md:py-0 text-center">
        <Link className="text-lg hover:text-[#064974]" to="/">
          Home
        </Link>
      </li>

      <li className="me-6 py-1 md:py-0 text-center ">
        <Link className="text-lg hover:text-[#064974]" to="/books">
          Books
        </Link>
      </li>
      <li className="me-6 py-1 md:py-0 text-center ">
        <Link className="text-lg hover:text-[#064974]" to="/add-book">
          Add Books
        </Link>
      </li>

      <li className="me-6 py-1 md:py-0 text-center">
        <Link className="text-lg hover:text-[#064974]" to="/aboutUs">
          About Us
        </Link>
      </li>

      <li className="me-4 md:hidden py-1 md:py-0 text-center">
        <Link className="text-lg font-semibold" to="/contactUs">
          <button className="w-32  h-11 ms-3   rounded-lg border-2  text-white   bg-[#064974]  ">
            Contact Us
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <section
      className={`fixed top-0 w-full z-50 bg-white ${
        scrollDown ? "shadow-lg" : ""
      }`}
    >
      <div className="flex justify-between md:justify-around items-center  h-24  mx-2">
        <div>
          <Link to="/">
            <img
              className="w-24 h-24 lg:w-40 lg:h-40 md:w-24 md:h-32 "
              src="https://i.ibb.co/mFY62vZ/ezgif-1-6f79f02b60-removebg-preview.png"
              alt="logo"
            />
          </Link>
        </div>
        <nav className="flex justify-center items-center custom-font">
          <div
            onClick={() => setOpen(!open)}
            className="w-6 h-6  md:hidden ms-auto"
          >
            {open ? (
              <HiXMark className="text-xl"></HiXMark>
            ) : (
              <HiBars4 className="text-xl"></HiBars4>
            )}
          </div>
          <ul
            className={`bg-white font-style font-semibold rounded-lg md:rounded-none hover: shadow-2xl md:shadow-none md:bg-inherit lg:flex md:flex sm:block justify-center   absolute  ease-in  items-center w-48 h-68 md:w-full md:h-20 md:static ${
              open ? "top-28 z-10 right-4" : "top-[-350px]"
            }`}
          >
            {menu}
          </ul>
        </nav>
        <div className=" hidden sm:hidden md:block font-style ">
          <Link to="/contact">
            <button className="w-40 font-bold md:w-40  h-12 md:h-12 rounded-lg md:rounded-lg border-2   border-[#025364] text-[#064974] hover:bg-[#064974] hover:text-white">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
