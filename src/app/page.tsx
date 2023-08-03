import React from "react";
import Feed from "../components/feed";
import { posts } from "../stubs/posts";
import Trending from "../components/trending";
import ContentCreationBar from "../components/content-creation-bar";
import Navbar from "../components/navbar";
import Header from "../components/header";

const App = () => {
  return (
    <div id="app" className="bg-gray-800 text-white flex flex-col h-screen">
      <Header />
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
