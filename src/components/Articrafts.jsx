import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCraft from "./SingleCraft";
import { Link } from "react-router-dom";

const Articrafts = () => {
  const [artiCrafts, setArticrafts] = useState([]);
  // console.log(artiCrafts);
  useEffect(() => {
    fetchAllCrafts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchAllCrafts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/limitedArtifact`
    );
    setArticrafts(data);
    // const sortedCrafts = data
    //   .sort((a, b) => b.likeCount - a.likeCount)
    //   .slice(0, 6);
    // setArticrafts(sortedCrafts);
  };

  return (
    <div>
      <div className="info text-center">
        <h1 className="text-4xl font-bold  text-[#373737]">Articrafts</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        {artiCrafts.map((craft) => (
          <SingleCraft key={craft._id} craft={craft}></SingleCraft>
        ))}
      </div>
      <div className="mx-auto text-center">
        <Link
          to="/allArtifacts"
          className="btn btn-neutral rounded-none my-5 mt-16"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Articrafts;
