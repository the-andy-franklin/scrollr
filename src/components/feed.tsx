"use client";
import { useEffect, useState } from "react";
import { useRefresh } from "../app/context/refresh";
import PostCard from "./post-card";

type Props = {
  initialPosts: {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    authorId: number;
    author: {
      id: number;
      email: string;
      name: string | null;
      password: string;
      createdAt: Date;
      updatedAt: Date;
    };
  }[];
};

const Feed = ({ initialPosts }: Props) => {
  const { refreshKey } = useRefresh();
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/posts");
      const posts = await res.json();
      setPosts(posts);
    })();
  }, [refreshKey]);

  return (
    <div className="w-full h-full flex flex-col items-center gap-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          author={post.author.name}
        />
      ))}
    </div>
  );
};

export default Feed;
