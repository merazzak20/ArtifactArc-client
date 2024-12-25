import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const ArtiCraftsDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [craft, setCraft] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);

  const {
    artifactName,
    artifactImage,
    historicalContext,
    artifactType,
    createdAt,
    discoveredAt,
    discoveredBy,
    presentLocation,
    artifactAdderName,
    artifactAdderEmail,
  } = craft;

  useEffect(() => {
    AllArticrafts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const AllArticrafts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/artifact/${id}`
    );
    setCraft(data);
    setLikeCount(data.likeCount || 0); // Set initial like count from the API response
  };

  const handleLike = async () => {
    const updatedLikeCount = likeCount + 1;
    setLikeCount(updatedLikeCount); // Update the local state
    setBtnStatus(true);

    // Optionally, make an API call to update the like count in the database
    await axios.put(`${import.meta.env.VITE_API_URL}/artifact/${id}`, {
      likeCount: updatedLikeCount,
      likeEmail: user.email,
    });
  };
  // console.log(likeCount);

  return (
    <div>
      <Helmet>
        <title>Craft Details - ArtifactArc</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div>
        <h2 className="text-center text-3xl font-bold my-5">
          {artifactName} Details
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-100 w-5/6 mx-auto shadow-xl p-5">
        {/* Left Column: Image */}
        <div className="flex items-center justify-center">
          {artifactImage && (
            <img
              className="w-full h-[450px] object-cover rounded-lg"
              src={artifactImage}
              alt={artifactName}
            />
          )}
        </div>

        {/* Right Column: Details */}
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            {artifactName}
            <div className="badge badge-primary p-2 py-3 ml-5">
              {artifactType}
            </div>
          </h2>
          <div className="mt-4 space-y-2">
            <p className=" text-gray-600">{historicalContext}</p>
            <p className="  text-gray-600">
              <strong>Created At:</strong> {createdAt}
            </p>
            <p className=" text-gray-600">
              <strong>Discovered At:</strong> {discoveredAt}
            </p>
            <p className="  text-gray-600">
              <strong>Discovered By:</strong> {discoveredBy}
            </p>
            <p className="  text-gray-600">
              <strong>Present Location:</strong>{" "}
              {presentLocation ? presentLocation : "N/A"}
            </p>
            <p className="  text-gray-600">
              <strong>Artifact Adder Name:</strong> {artifactAdderName}
            </p>
            <p className="  text-gray-600">
              <strong>Artifact Adder Email:</strong> {artifactAdderEmail}
            </p>
          </div>
          <div className="flex items-center mt-4">
            <span className="  text-gray-600 flex items-center font-semibold gap-1 text-xl">
              <FaRegHeart className=" " />
              {likeCount ? likeCount : 0}
            </span>
          </div>
          <div className="mt-6">
            <button
              className={`btn btn-outline btn-neutral w-full rounded-none ${
                btnStatus && "disabled"
              }`}
              onClick={handleLike}
              disabled={btnStatus}
            >
              <AiFillLike className="text-gray-700 text-2xl mr-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtiCraftsDetails;
