import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet";
import MySingleFact from "../components/MySingleFact";

const MyArtifact = () => {
  const { user } = useAuth();
  const [craft, setCraft] = useState([]);
  useEffect(() => {
    AllArticrafts();
  }, [user?.email]);
  const AllArticrafts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/artifact`
    );
    console.log(data);
    const mydData = data.filter((my) => my.artifactAdderEmail === user?.email);
    setCraft(mydData);
    console.log(craft);
  };
  return (
    <div>
      <Helmet>
        <title>My Artifacts - ArtifactArc</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div>
        <h2 className="text-center text-3xl font-bold my-5">
          My Artifacts :{craft.length}
        </h2>
      </div>
      <div>
        {craft.map((cr) => (
          <MySingleFact key={cr._id} cr={cr}></MySingleFact>
        ))}
      </div>
    </div>
  );
};

export default MyArtifact;
