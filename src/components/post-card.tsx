import React from 'react';

type Props = {
  title: string;
  content: string;
  author: string | null;
}

const PostCard = ({ title, content, author }: Props) => {
  return (
    <div className="w-96 rounded overflow-hidden shadow-lg bg-white text-gray-700 p-6">
      <div className="font-bold text-xl  mb-2">{title}</div>
      <p className="text-base">{content}</p>
      {author && (
        <div className="mt-4">
          Author: {author}
        </div>
      )}
    </div>
  );
};

export default PostCard;
