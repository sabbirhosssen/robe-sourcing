import React from "react";
import { BsFacebook, BsFillPlayFill, BsLinkedin } from "react-icons/bs";
import { MdCall } from "react-icons/md";
//image
import logof from "./../../Image/logo-removebg-preview.png";
const Footer = () => {
  return (
    <div className="bg-gray-700  text-white pb-1  pt-12 ">
      <div className="grid grid-cols-4  gap-2 justify-around justify-items-center   ">
        <div className="">
          <div className=" ml-16">
            <img className="w-20 h-auto" src={logof} alt="" />
          </div>
          <h5 className="inline  text-[18px]"> ROBE SOURCING LTD.</h5>
          <p className="text-start text-[11px] px-4 mt-1 w-fit">
            RSIL is a pioneering, dynamic, professionally managed business
            organization that has strong experience in the field of readymade
            garments sector with world-class service, quality solutions and
            value addition services to end products for the textile industries
            on a global level, beginning from fabrics to fashion through market
            knowledge, experienced sourcing professionals.
          </p>
        </div>
        <div className="text-start mt-7">
          <h4 className="mb-4">Details</h4>
          <ul className="text-xs">
            <li>Join Us</li>
            <li>Products</li>
            <li>Product Gallery</li>
          </ul>
        </div>
        <div className="h2">
          <div className="text-start mt-7">
            <h4 className="mb-4">Company Profile</h4>
            <ul className="text-xs">
              <li className="inline">Home</li>
              <li className="block">About Us</li>
              <li className="inline">Our Mission & Vision</li>
              <li className="inline">Business Information</li>
              <li className="inline">PHOTO GALLERY</li>
            </ul>
          </div>
        </div>
        <div className="text-start mt-7">
          <div className="text-xs">
            <div className="text-lg mb-4">Address:</div>
            <div className="hf">House: 05, Road: 03,</div>
            <div className="hf">Sector: 09. Uttara-1230, Dhaka, Bangladesh</div>
            <div className="hf">Phone: (+880) 1978047557 </div>
            <div className="ml-10"> (+880) 9611832626 </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-between lg:px-12 sm:p-0  mt-8 mb-0">
        <p className="text-[14px] mt-1">robesourcing.com ©2020</p>
        <div className="flex justify-center justify-items-center text-center  gap-5">
          <div className="text-[18px]">Get Social</div>
          <div className="text-[20px] mt-1">
            <BsFacebook />
          </div>
          <div className="text-[20px] mt-1">
            {" "}
            <BsLinkedin />{" "}
          </div>
          <div className="text-[20px] mt-1">
            {" "}
            <BsFillPlayFill />
          </div>
          <div className="text-[20px] mt-1">
            <MdCall />
          </div>
          <div className="text-[18px]">SUPPORT POLICY</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
