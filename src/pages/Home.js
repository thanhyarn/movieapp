import React from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import HorizontalScollCard from "../components/HorizontalScollCard";

const Home = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData);
  return (
    <div>
      <BannerHome />
      <HorizontalScollCard data={trendingData} heading={"Trending"}/>
    </div>
  );
};

export default Home;
