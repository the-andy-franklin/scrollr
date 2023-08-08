import React from 'react';

type Props = {
  title: string;
  content: string;
  author: string | null;
}

const PostCard = ({ title, content, author }: Props) => {
  return (
    <div
      className="bg-white text-gray-700 p-6 rounded shadow-lg flex-shrink-0 overflow-hidden"
      style={{ width: '32rem' }}
    >
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
