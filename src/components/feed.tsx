import React from "react";
import Post from "./post";

type Props = {
  posts?: {
    username: string;
    content: string;
  }[];
};

const Feed = ({ posts }: Props) => {
  return (
    <>
      {posts?.map((post, index) => (
        <Post key={index} username={post.username} content={post.content} />
      ))}
    </>
  );
};

export default Feed;
