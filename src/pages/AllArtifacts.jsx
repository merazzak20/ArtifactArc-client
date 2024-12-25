import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCraft from "../components/SingleCraft";

const AllArticrafts = () => {
  const [artiCrafts, setArticrafts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(artiCrafts);
  useEffect(() => {
    fetchAllCrafts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchAllCrafts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/artifact`
    );
    setArticrafts(data);

    // Search
    // const handleSearch = (e) => {
    //   setSearchQuery(e.target.value);
    // };

    // const filteredCrafts = artiCrafts.filter((craft) =>
    //   craft.artifactName.toLowerCase().includes(searchQuery.toLowerCase())
    // );
  };
  return (
    <div>
      <div className="info text-center my-8">
        <h1 className="text-4xl font-bold  text-[#373737]">
          All Articrafts: {artiCrafts.length}
        </h1>
      </div>
      {/* Search input */}
      {/* <div className="my-4 text-center">
        <input
          type="text"
          placeholder="Search by artifact name..."
          value={searchQuery}
          onChange={handleSearch}
          className="input input-bordered w-full max-w-xs"
        />
        <button
          onClick={handleSearch}
          className="ml-4 px-6 py-2 btn btn-primary rounded-none"
        >
          Search
        </button>
      </div> */}
      <div className="grid md:grid-cols-3 gap-5 my-8">
        {artiCrafts.map((craft) => (
          <SingleCraft key={craft._id} craft={craft}></SingleCraft>
        ))}
      </div>
    </div>
  );
};

export default AllArticrafts;
