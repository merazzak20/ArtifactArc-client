import React from "react";

const SingleCraft = ({ craft }) => {
  const { artifactName, artifactImage, historicalContext, likeCount } = craft;
  //     Artifact Image
  // Artifact Name
  // Short description
  // Like Count
  // View Details button

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
            {historicalContext.substring(0, 70)}...
          </p>
        </div>

        <div className="card-actions justify-end mt-3">
          <p className="font-semibold">Total Like: {likeCount}</p>
          <button
            // onClick={() => handleDetails(_id)}
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
