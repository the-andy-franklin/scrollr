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
  <div className="flex flex-col flex-grow-0 pt-8 pr-4 text-right border-r border-white">
    <nav>
      <a
        href="#"
        className="text-lg flex flex-grow-0 gap-2 justify-end items-center mb-3 hover:mb-2.5 hover:border-b-2 border-white"
      >
        <AiFillHome size={32} />
        Home
      </a>
      <a
        href="#"
        className="text-lg flex flex-grow-0 gap-2 justify-end items-center mb-3 hover:mb-2.5 hover:border-b-2 border-white"
      >
        <LiaCompassSolid size={32} />
        Explore
      </a>
      <a
        href="#"
        className="text-lg flex flex-grow-0 gap-2 justify-end items-center mb-3 hover:mb-2.5 hover:border-b-2 border-white"
      >
        <BsFillCameraReelsFill size={32} />
        Live
      </a>
      <a
        href="#"
        className="text-lg flex flex-grow-0 gap-2 justify-end items-center mb-3 hover:mb-2.5 hover:border-b-2 border-white"
      >
        <BsFillLightningChargeFill size={32} />
        Activity
      </a>
      <a
        href="#"
        className="text-lg flex flex-grow-0 gap-2 justify-end items-center mb-3 hover:mb-2.5 hover:border-b-2 border-white"
      >
        <AiFillWechat size={32} />
        Messages
      </a>
      <a
        href="#"
        className="text-lg flex flex-grow-0 gap-2 justify-end items-center mb-3 hover:mb-2.5 hover:border-b-2 border-white"
      >
        <BsFillEnvelopeFill size={32} />
        Inbox
      </a>
      <a
        href="#"
        className="text-lg flex flex-grow-0 gap-2 justify-end items-center mb-3 hover:mb-2.5 hover:border-b-2 border-white"
      >
        <BsFillPersonFill size={32} />
        Account
      </a>
      <a
        href="#"
        className="text-lg flex flex-grow-0 gap-2 justify-end items-center mb-3 hover:mb-2.5 hover:border-b-2 border-white"
      >
        <BsFillGearFill size={32} />
        Settings
      </a>
      <a
        href="#"
        className="text-lg flex flex-grow-0 gap-2 justify-end items-center mb-3 hover:mb-2.5 hover:border-b-2 border-white"
      >
        <BiSolidStore size={32} />
        Scrollr Store
      </a>
      <a
        href="#"
        className="text-lg flex flex-grow-0 gap-2 justify-end items-center mb-3 hover:mb-2.5 hover:border-b-2 border-white"
      >
        <TbWorldWww size={32} />
        Get a Domain
      </a>
      <a
        href="#"
        className="text-lg flex flex-grow-0 gap-2 justify-end items-center mb-3 hover:mb-2.5 hover:border-b-2 border-white"
      >
        <GiSparkles size={32} />
        Go Ad-Free
      </a>
    </nav>
  </div>
);

export default Navbar;
