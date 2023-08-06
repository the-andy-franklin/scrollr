import React from "react";
import Trending from "../components/trending";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Feed from "../components/feed";
import NewPostButton from "../components/new-post-button";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "./api/auth/[...nextauth]/route";
import { RefreshProvider } from "./context/refresh";
import { prisma } from "../dependencies/prisma";

const App = async () => {
  const session = await getServerSession(nextAuthOptions);

  const posts = session?.user?.id ? await prisma.post.findMany({
    where: {
      authorId: session.user.id,
    },
    include: {
      author: true,
    },
  }) : [];

  return (
    <div className="bg-gray-800 text-white flex flex-col h-screen">
      <Header session={session} />
      <div className="flex h-0 flex-grow mx-4">
        <Navbar />
        <div className="flex flex-col flex-grow gap-4">
          <RefreshProvider>
            <div className="flex justify-end border-b border-white p-4">
              <NewPostButton />
            </div>
            <div className="flex flex-col gap-4 p4 overflow-auto">
              <Feed initialPosts={posts} />
            </div>
          </RefreshProvider>
        </div>
        <div className="flex flex-col pt-8 pl-4 text-left border-l border-white">
          <Trending trendingTopics={["pizza", "flargle", "bargle"]} />
        </div>
      </div>
    </div>
  );
};

export default App;
