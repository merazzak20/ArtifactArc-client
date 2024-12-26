import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet";
import SingleCraft from "../components/SingleCraft";

const LikedArtifact = () => {
  const { user } = useAuth();
  const [craft, setCraft] = useState([]);
  useEffect(() => {
    AllArticrafts();
  }, [user?.email]);
  const AllArticrafts = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/artifact`,
        { withCredentials: true }
      );
      const likedData = data.filter((cr) => cr.likeEmail === user?.email);
      setCraft(likedData);
      // console.log(craft);
      // console.log(data);
    } catch (error) {
      // console.error("Error fetching artifacts:", error);
    }
  };
  // console.log(craft);

  return (
    <div>
      <Helmet>
        <title>Liked Artifacts - ArtifactArc</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div>
        {craft.length > 0 ? (
          <h2 className="text-center text-3xl font-bold my-5">
            My Liked Artifacts : {craft.length}
          </h2>
        ) : (
          <h2 className="text-center text-3xl font-bold my-5">
            {" "}
            Ops! There is no Available data.{" "}
          </h2>
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-5 my-8">
        {craft.map((craft) => (
          <SingleCraft key={craft._id} craft={craft}></SingleCraft>
        ))}
      </div>
    </div>
  );
};

export default LikedArtifact;
