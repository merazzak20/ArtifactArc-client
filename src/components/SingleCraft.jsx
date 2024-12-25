import React from "react";
import { useNavigate } from "react-router-dom";

const SingleCraft = ({ craft }) => {
  const { _id, artifactName, artifactImage, historicalContext, likeCount } =
    craft;

  const navigate = useNavigate();

  const handleDetails = (_id) => {
    // console.log(_id);
    navigate(`/articraft/${_id}`);
  };

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        {artifactImage && (
          <img className="w-full h-[200px] object-cover" src={artifactImage} />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{artifactName}</h2>
        {/* Row 1 */}
        <div className="">
          <p className="font-medium text-gray-600">
            {historicalContext?.substring(0, 70)}...
          </p>
        </div>

        <div className="card-actions justify-end mt-3">
          <p className="font-semibold">
            Total Like: {likeCount ? likeCount : 0}
          </p>
          <button
            onClick={() => handleDetails(_id)}
            className="btn btn-sm btn-outline btn-neutral rounded-none "
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCraft;
