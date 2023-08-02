import React from "react";
import Feed from "../components/feed";
import { posts } from "../stubs/posts";
import Trending from "../components/trending";
import ContentCreationBar from "../components/content-creation-bar";
import Navbar from "../components/navbar";

const App = () => {
  return (
    <div className="bg-gray-800 text-white flex flex-col h-screen">
      <header className="p-4 flex justify-between items-center border-b border-black">
        <h1 className="text-2xl font-bold">Scrollr</h1>
        <div className="flex items-center gap-4">
          <button className="bg-white text-blue-500 px-4 py-2 rounded active:bg-gray-200">
            Login
          </button>
          <button className="bg-white text-blue-500 px-4 py-2 rounded active:bg-gray-200">
            Sign up
          </button>
        </div>
      </header>
      <div className="flex h-0 flex-grow mx-4">
        <Navbar />
        <div className="flex flex-col flex-grow gap-4 p-4 overflow-auto">
          <ContentCreationBar />
          <Feed posts={posts} />
        </div>
        <div className="flex flex-col pt-8 pl-4 text-left border-l border-white">
          <Trending trendingTopics={["pizza", "flargle", "bargle"]} />
        </div>
      </div>
    </div>
  );
};

export default App;
