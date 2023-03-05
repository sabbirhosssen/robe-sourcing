import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { SiYoutube } from "react-icons/si";
//image
import logof from "./../../Image/logo-removebg-preview.png";

//CSS
import "./footer.css";
const Footer = () => {
  return (
    <div className="bg_back w-full bg-gray-700  text-white pb-1  pt-12 ">
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3   gap-2 justify-between justify-items-center   ">
        <div className="">
          <div className=" ml-20">
            <img className="w-20 h-auto" src={logof} alt="" />
          </div>
          <h2 className="  text-[25px] text-center font-serif">
            ROBE SOURCING LTD
          </h2>

          <div className="text-start mt-3 ml-10 md:ml-3 font-serif">
            <div className="">
              <div className="text-md mb-1">Office Address:</div>
              <div className="text-xs mb-1">
                Level-3,House-5,Road-3,Sector-9,Uttara,Dhaka
              </div>

              <div className="text-xs">Phone: (+880) 1978047557 </div>
              <div className="ml-10 text-xs"> (+880) 9611832626 </div>
            </div>
          </div>
        </div>
        <div className="text-start xs:ml-72  mt-7 font-serif ">
          <h3 className="mb-4 ">Useful Links</h3>
          <ul className="text-xs">
            <li className="inline">Home</li>
            <li className="block">About Us</li>
            <li className="block">Join Us</li>
            <li className="block">Product Gallery</li>
            <li className="inline">Our Mission & Vision</li>
            <li className="block">Business Information</li>
          </ul>
        </div>
        <div className="h2">
          <div className="text-start mt-7">
            <h4 className="mb-4 xs:text-md sm:text-md md:text-2xl lg:text-2xl xl:text-2xl text-center font-serif hover:text-sky-700 ">
              Follow
            </h4>
            <div className="flex justify-center justify-items-center text-center  gap-5">
              <div className="text-[25px] mt-1 hover:text-sky-800">
                <BsFacebook />
              </div>
              <div className="text-[25px] mt-1">
                {" "}
                <BsLinkedin />{" "}
              </div>
              <div className="text-[25px] mt-1">
                {" "}
                <SiYoutube />
              </div>
              <div className="text-[25px] mt-1">
                <MdCall />
              </div>
              {/* <div className="text-[18px]">SUPPORT POLICY</div> */}
            </div>
          </div>
        </div>
      </div>

      <div className=" text-center lg:px-12 sm:p-0  mt-8 mb-0">
        <p className="text-[14px] mt-1">©robesourcing.com 2020</p>
      </div>
    </div>
  );
};

export default Footer;
