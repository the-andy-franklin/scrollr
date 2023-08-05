"use client";
import React from "react";
import {
  MdTextFields,
  MdInsertPhoto,
  MdInsertLink,
  MdChat,
  MdVolumeUp,
  MdOndemandVideo,
} from "react-icons/md";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const ContentCreationBar = () => {
  const newPost = async () => {
    // const post = await prisma.post.create()
  };

  return (
    <div
      className="flex justify-center items-center space-x-8 p-4 bg-white rounded shadow"
    >
      <button
        className="text-black flex flex-col items-center hover:underline hover:text-blue-500"
        onClick={newPost}
      >
        <MdTextFields size={32} color={"#000000"} />
        Text
      </button>
      <button
        className="text-black flex flex-col items-center hover:underline hover:text-blue-500"
        onClick={newPost}
      >
        <MdInsertPhoto size={32} color={"#FF4940"} />
        Photo
      </button>
      <button
        className="text-black flex flex-col items-center hover:underline hover:text-blue-500"
        onClick={newPost}
      >
        <BiSolidQuoteAltLeft size={32} color={"#FF8A00"} />
        Quote
      </button>
      <button
        className="text-black flex flex-col items-center hover:underline hover:text-blue-500"
        onClick={newPost}
      >
        <MdInsertLink size={32} color={"#00CF35"} />
        Link
      </button>
      <button
        className="text-black flex flex-col items-center hover:underline hover:text-blue-500"
        onClick={newPost}
      >
        <MdChat size={32} color={"#00B8FF"} />
        Chat
      </button>
      <button
        className="text-black flex flex-col items-center hover:underline hover:text-blue-500"
        onClick={newPost}
      >
        <MdVolumeUp size={32} color={"#7C5CFF"} />
        Audio
      </button>
      <button
        className="text-black flex flex-col items-center hover:underline hover:text-blue-500"
        onClick={newPost}
      >
        <MdOndemandVideo size={32} color={"#FF62CE"} />
        Video
      </button>
    </div>
  );
};

export default ContentCreationBar;
