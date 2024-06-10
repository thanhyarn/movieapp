import React from "react";
import { useSelector } from "react-redux";

const Card = ({ data, trending, index }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);
  return (
    <div className="w-full max-w-[230px] h-80 overflow-hidden rounded relative">
      <img src={imageURL + data?.poster_path} />
      <div className="absolute top-0">
        {trending && (
          <div className="py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60">
            #{index} Trending
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
