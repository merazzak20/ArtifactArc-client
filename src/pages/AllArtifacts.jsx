import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCraft from "../components/SingleCraft";

const AllArticrafts = () => {
  const [artiCrafts, setArticrafts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCrafts, setFilteredCrafts] = useState([]);
  // console.log(artiCrafts);
  useEffect(() => {
    fetchAllCrafts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchAllCrafts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/artifact`,
      { withCredentials: true }
    );
    setArticrafts(data);
    setFilteredCrafts(data);
  };

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); // Update search query
  };

  // Handle search button click
  const handleSearch = () => {
    // Filter artifacts based on the search query
    const results = artiCrafts.filter((craft) =>
      craft.artifactName.toLowerCase().includes(searchQuery)
    );
    setFilteredCrafts(results); // Update filtered results
  };

  return (
    <div>
      <div className="info text-center my-8">
        <h1 className="text-4xl font-bold  text-[#373737]">
          All Articrafts: {artiCrafts.length}
        </h1>
      </div>
      {/* Search input */}
      <div className="my-4 text-center">
        <input
          type="text"
          placeholder="Search by artifact name..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="input input-bordered w-full max-w-xs rounded-none"
        />
        <button
          onClick={handleSearch}
          className="ml-4 px-6 py-2 btn btn-neutral rounded-none"
        >
          Search
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-5 my-8">
        {filteredCrafts.map((craft) => (
          <SingleCraft key={craft._id} craft={craft}></SingleCraft>
        ))}
      </div>
    </div>
  );
};

export default AllArticrafts;
