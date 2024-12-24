import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const LikedArtifact = () => {
  const { user } = useAuth();
  const [craft, setCraft] = useState([]);
  useEffect(() => {
    AllArticrafts;
  }, [user.email]);
  const AllArticrafts = async () => {
    const { data } = axios.get(`${import.meta.env.VITE_API_URL}/artifact}`);
    const likedData = data.filter((cr) => cr.artifactAdderEmail === user.email);
    setCraft(likedData);
    console.log(craft);
  };
  return <div></div>;
};

export default LikedArtifact;
