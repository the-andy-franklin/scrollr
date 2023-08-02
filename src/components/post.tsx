import React from "react";

type Props = {
  username: string;
  content: string;
};

const Post = ({ username, content }: Props) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-bold text-black text-lg mb-2">{username}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Post;
