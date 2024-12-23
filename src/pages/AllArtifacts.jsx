import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCraft from "../components/SingleCraft";

const AllArticrafts = () => {
  const [artiCrafts, setArticrafts] = useState([]);
  console.log(artiCrafts);
  useEffect(() => {
    fetchAllCrafts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchAllCrafts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/artifact`
    );
    setArticrafts(data);
    // const sortedCrafts = data.sort((a, b) => b.likeCount - a.likeCount);
    // setArticrafts(sortedCrafts);
  };
  return (
    <div>
      <div className="info text-center my-8">
        <h1 className="text-4xl font-bold  text-[#373737]">
          All Articrafts: {artiCrafts.length}
        </h1>
        {/* <p className="text-xl mt-3 font-medium">
          Number of Visa: {loadedVisas.length}
        </p> */}
      </div>
      <div className="grid md:grid-cols-3 gap-5 my-8">
        {artiCrafts.map((craft) => (
          <SingleCraft key={craft._id} craft={craft}></SingleCraft>
        ))}
      </div>
    </div>
  );
};

export default AllArticrafts;
