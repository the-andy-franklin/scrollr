import React from "react";

type Props = {
  trendingTopics: string[];
};

const Trending = ({ trendingTopics }: Props) => {
  return (
    <div className="p-4 bg-gray-900 rounded shadow w-48 h-min">
      <h2 className="font-bold text-lg mb-2">Trending</h2>
      {trendingTopics.map((topic, index) => (
        <div
          key={index}
          className="mb-2 text-blue-500 hover:underline cursor-pointer"
        >
          #{topic}
        </div>
      ))}
    </div>
  );
};

export default Trending;
