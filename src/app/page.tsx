import React from "react";
import Trending from "../components/trending";
import Navbar from "../components/navbar";
import Header from "../components/header";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "./api/auth/[...nextauth]/route";
import Feed from "../components/feed";

const App = async () => {
  const session = await getServerSession(nextAuthOptions);

  return (
    <div className="bg-gray-800 text-white flex flex-col h-screen">
      <Header />
      <div className="flex h-0 flex-grow mx-4">
        <Navbar />
        <div className="flex flex-col flex-grow gap-4 p-4 overflow-auto">
          {/* <h1>Server Session</h1>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <h1>Client Session</h1>
          <User /> */}
          {/* <ContentCreationBar /> */}
          <Feed />
        </div>
        <div className="flex flex-col pt-8 pl-4 text-left border-l border-white">
          <Trending trendingTopics={["pizza", "flargle", "bargle"]} />
        </div>
      </div>
    </div>
  );
};

export default App;
