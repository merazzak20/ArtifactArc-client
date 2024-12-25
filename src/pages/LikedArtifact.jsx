import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const LikedArtifact = () => {
  const { user } = useAuth();
  const [craft, setCraft] = useState([]);
  useEffect(() => {
    AllArticrafts();
  }, []);
  const AllArticrafts = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/artifact`
      );
      const likedData = data.filter((cr) => cr.likeEmail === user.email);
      setCraft(likedData);
      console.log(craft);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching artifacts:", error);
    }
  };

  return (
    <div>
      <h2>Liked Craft: {craft.length}</h2>
    </div>
  );
};

export default LikedArtifact;
