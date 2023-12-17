import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";
import { IoIosArrowForward } from "react-icons/io";
import img2 from "../../img/slide1.png";
import img1 from "../../img/flower-bg.png";
import img3 from "../../img/slide2.png";
import img4 from "../../img/slide3.png";

export default function Slider() {
  return (
    <div className="slider-container ">
      <div className=" mt-40   ">
        <Swiper
          className="mySwiper h-[200px] sm:h-[300px] md:h-[400px] xl:h-[500px] 2xl:h-[600px] rounded-2xl  "
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide className=" bg-[#bff1f8] ">
            <div className="  ">
              <div className="relative">
                <motion.div
                  variants={fadeIn("down", 0.9)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.9 }}
                  className="absolute top-0 left-0 w-[150px] sm:w-[230px] md:w-[300px] xl:w-[480px] 2xl:w-[600px]  "
                >
                  <img src={img1} alt="First Image" className="" />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="relative z-10 w-[100px] sm:w-[120px]  md:w-[200px]  xl:w-[290px]  2xl:w-[350px] "
                >
                  <img src={img2} alt="Second Image" className="" />
                </motion.div>
              </div>
            </div>
            <div className=" ml-10 md:ml-10 xl:ml-10 2xl:ml-0 ">
              <motion.div
                variants={fadeIn("down", 0.9)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
                className=" text-black font-normal sm:font-normal md:font-medium xl:font-semibold mb-0 sm:mb-2 2xl:mb-5 "
              >
                EDITOR CHOICE
              </motion.div>
              <div className=" text-[20px] sm:text-[20px] md:text-[35px] xl:text-[50px] 2xl:text-[60px] leading-tight font-bold ">
                <motion.p
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  Top 10 Books
                </motion.p>
                <motion.p
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  To Make It A
                </motion.p>
                <motion.p
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  Great Year
                </motion.p>
              </div>
              <motion.button
                variants={fadeIn("up", 0.9)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
                className="bg-[#FFFFFF] flex items-center text-[#3D3D3D] hover:text-[#fff] hover:bg-[#000000] mt-2 md:mt-2  xl:mt-2 2xl:mt-10 font-semibold sm:font-semibold md:font-semibold xl:font-bold text-[12px] md:text-[16px] py-[10px] px-3 md:px-6 rounded-full"
              >
                Shop Now
                <IoIosArrowForward className=" ml-1 text-[#3477a3] " />
              </motion.button>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-[#41a0c5] ">
            <div className="  ">
              <div className="relative">
                <motion.div
                  variants={fadeIn("down", 0.9)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.9 }}
                  className="absolute top-0 left-0 w-[150px] sm:w-[230px] md:w-[300px] xl:w-[480px] 2xl:w-[600px] "
                >
                  <img src={img1} alt="First Image" className=" " />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="relative z-10 ml-10 w-[100px] sm:w-[150px]  md:w-[200px]  xl:w-[300px]  2xl:w-[400px]  "
                >
                  <img src={img3} alt="Second Image" className="  " />
                </motion.div>
              </div>
            </div>
            <div className="">
              <motion.div
                variants={fadeIn("down", 0.9)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
                className=" text-white font-normal sm:font-normal md:font-medium xl:font-semibold mb-0 sm:mb-1 xl:mb-3 2xl:mb-5 "
              >
                EDITOR CHOICE
              </motion.div>
              <div className=" text-[20px] sm:text-[20px] md:text-[35px] xl:text-[50px] 2xl:text-[60px] leading-tight font-bold">
                <motion.p
                  className="text-white"
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  Meet Your Next
                </motion.p>
                <motion.p
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  Favorite Book
                </motion.p>
              </div>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
                className=" text-white mt-1 sm:mt-2 xl:mt-2 2xl:mt-10 "
              >
                Original Price $45.55
              </motion.p>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className=" text-white text-normal md:text-2xl xl:text-3xl font-semibold md:font-bold "
              >
                $24.55
              </motion.p>
              <motion.button
                variants={fadeIn("up", 0.9)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
                className="bg-[#FFFFFF] flex items-center text-[#3D3D3D] hover:text-[#fff] hover:bg-[#000000] mt-1 sm:mt-2 xl:mt-4 2xl:mt-10 font-semibold sm:font-semibold md:font-semibold xl:font-bold text-[12px] md:text-[16px] py-[10px] px-3 md:px-6 rounded-full"
              >
                Shop Now
                <IoIosArrowForward className=" ml-1 text-[#3477a3] " />
              </motion.button>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-[#F6F6F6] ">
            <div className="  ">
              <div className="relative">
                <motion.div
                  variants={fadeIn("down", 0.9)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.9 }}
                  className="absolute top-0 left-0 w-[150px] sm:w-[230px] md:w-[300px] xl:w-[480px] 2xl:w-[600px]  "
                >
                  <img src={img1} alt="First Image" className=" " />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="relative z-10 ml-10 w-[100px] sm:w-[150px]  md:w-[200px]  xl:w-[300px]  2xl:w-[400px] "
                >
                  <img src={img4} alt="Second Image" className="  " />
                </motion.div>
              </div>
            </div>
            <div className="">
              <motion.div
                variants={fadeIn("down", 0.9)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
                className=" text-[#054A75] font-normal sm:font-normal md:font-medium xl:font-semibold mb-0 sm:mb-1 xl:mb-3 2xl:mb-5   "
              >
                EDITOR CHOICE
              </motion.div>
              <div className=" text-[20px] sm:text-[20px] md:text-[35px] xl:text-[50px] 2xl:text-[60px] leading-tight font-bold ">
                <motion.p
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-[#054A75]"
                >
                  Our Sci-Fi &
                </motion.p>
                <motion.p
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-[#054A75]"
                >
                  Fantasy Picks
                </motion.p>
              </div>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
                className=" text-[#054A75] text-sm md:font-normal mt-1 sm:mt-1 xl:mt-2 2xl:mt-10 "
              >
                Original Price $45.55
              </motion.p>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className=" text-[#054A75] text-normal md:text-2xl xl:text-3xl font-semibold md:font-bold  "
              >
                $24.55
              </motion.p>
              <motion.button
                variants={fadeIn("up", 0.9)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
                className="bg-[#FFFFFF] flex items-center text-[#3D3D3D] hover:text-[#fff] hover:bg-[#000000] mt-0 sm:mt-2 xl:mt-4 2xl:mt-10 font-semibold sm:font-semibold md:font-semibold xl:font-bold text-[12px] md:text-[16px] py-2 md:py-[5px] xl:py-[10px] px-2 md:px-4 xl:px-6 2xl:px-6 rounded-full"
              >
                Shop Now
                <IoIosArrowForward className=" ml-1 text-[#3477a3] " />
              </motion.button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
