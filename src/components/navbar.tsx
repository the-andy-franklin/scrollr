import React from "react";
import { AiFillHome, AiFillWechat } from "react-icons/ai";
import { LiaCompassSolid } from "react-icons/lia";
import {
  BsFillCameraReelsFill,
  BsFillLightningChargeFill,
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsFillGearFill,
} from "react-icons/bs";
import { GiSparkles } from "react-icons/gi";
import { TbWorldWww } from "react-icons/tb";
import { BiSolidStore } from "react-icons/bi";

const Navbar = () => (
  <div className="flex flex-col pt-8 pr-4 text-right border-r border-white">
    <nav>
      <a href="#" className="text-lg mb-3 flex gap-2 justify-end items-center">
        <AiFillHome size={32} />
        Home
      </a>
      <a href="#" className="text-lg mb-3 flex gap-2 justify-end items-center">
        <LiaCompassSolid size={32} />
        Explore
      </a>
      <a href="#" className="text-lg mb-3 flex gap-2 justify-end items-center">
        <BsFillCameraReelsFill size={32} />
        Live
      </a>
      <a href="#" className="text-lg mb-3 flex gap-2 justify-end items-center">
        <BsFillLightningChargeFill size={32} />
        Activity
      </a>
      <a href="#" className="text-lg mb-3 flex gap-2 justify-end items-center">
        <AiFillWechat size={32} />
        Messages
      </a>
      <a href="#" className="text-lg mb-3 flex gap-2 justify-end items-center">
        <BsFillEnvelopeFill size={32} />
        Inbox
      </a>
      <a href="#" className="text-lg mb-3 flex gap-2 justify-end items-center">
        <BsFillPersonFill size={32} />
        Account
      </a>
      <a href="#" className="text-lg mb-3 flex gap-2 justify-end items-center">
        <BsFillGearFill size={32} />
        Settings
      </a>
      <a href="#" className="text-lg mb-3 flex gap-2 justify-end items-center">
        <BiSolidStore size={32} />
        Scrollr Store
      </a>
      <a href="#" className="text-lg mb-3 flex gap-2 justify-end items-center">
        <TbWorldWww size={32} />
        Get a Domain
      </a>
      <a href="#" className="text-lg mb-3 flex gap-2 justify-end items-center">
        <GiSparkles size={32} />
        Go Ad-Free
      </a>
    </nav>
  </div>
);

export default Navbar;
