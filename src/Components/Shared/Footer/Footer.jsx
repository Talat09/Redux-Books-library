/* eslint-disable react/no-unescaped-entities */
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaBasketballBall,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="py-16   mx-auto">
      <div className=" h-[180px] w-full font-style">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1  justify-items-center items-center mt-0 md:mt-12 ">
          <div className="">
            <img
              className="w-24 h-24  mx-auto"
              src="https://i.ibb.co/mFY62vZ/ezgif-1-6f79f02b60-removebg-preview.png"
              alt="books-library-logo"
            />
            <div className="my-0   lg:mb-[-30px] ">
              <p className="text-base text-center">
                &#169; 2023 Books Library. Privacy Policy
              </p>
              <Link to="/terms&condition">
                <p className="text-base text-center">Terms & Condition</p>
              </Link>
            </div>
          </div>
          <div className="">
            <div className=" flex md:flex-row flex-col  text-center items-center ">
              <div className="flex sm:text-base md:text-xl font-medium   text-center items-center ">
                <ul className="flex flex-col md:flex-row justify-center items-center">
                  <li className="me-6 py-1 md:py-0 text-center">
                    <Link className="text-xl hover:text-[#064974]" to="/">
                      Home
                    </Link>
                  </li>

                  <li className="me-6 py-1 md:py-0 text-center ">
                    <Link className="text-xl hover:text-[#064974]" to="/books">
                      Books
                    </Link>
                  </li>
                  <li className="me-6 py-1 md:py-0 text-center ">
                    <Link
                      className="text-xl hover:text-[#064974]"
                      to="/add-book"
                    >
                      Add Books
                    </Link>
                  </li>

                  <li className="me-6 py-1 md:py-0 text-center">
                    <Link
                      className="text-xl hover:text-[#064974]"
                      to="/aboutUs"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" flex md:flex-row flex-col  text-center items-center ">
              <div className="flex text-center items-center my-3 ">
                <div className=" sm:text-xl md:text-3xl mr-2 md:mr-5 ">
                  <FaFacebookF className="text-[#064974]" />
                </div>
                <div className="sm:text-xl md:text-3xl mr-2 md:mr-5 ">
                  <FaTwitter className="text-[#064974]" />
                </div>
                <div className="sm:text-xl md:text-3xl mr-2 md:mr-5 ">
                  <FaBasketballBall className="text-[#064974]" />
                </div>

                <div className="sm:text-xl md:text-3xl mr-2 md:mr-5 ">
                  <FaInstagram className="text-[#064974]" />
                </div>
                <div className="sm:text-xl md:text-3xl mr-2 md:mr-5 ">
                  <FaLinkedinIn className="text-[#064974]" />
                </div>
                <div className="sm:text-xl md:text-3xl  mr-2 md:mr-5 ">
                  <FaYoutube className="text-[#064974]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
