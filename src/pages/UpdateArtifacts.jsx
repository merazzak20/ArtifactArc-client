import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UpdateArtifacts = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [craft, setCraft] = useState({});
  const [type, setType] = useState("");
  // console.log(id);
  useEffect(() => {
    specificArticraft();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (craft?.artifactType) {
      setType(craft.artifactType); // Initialize the dropdown with fetched data
    }
  }, [craft]);

  const specificArticraft = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/artifact/${id}`
    );
    setCraft(data);
  };
  // console.log(craft);
  const {
    _id,
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
  const handleChange = (e) => {
    const { value } = e.target;
    setType(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(2);
    const formData = new FormData(e.target);
    formData.set("artifactType", type);
    const updatedData = Object.fromEntries(formData.entries());

    const { ...updatedFact } = updatedData;
    // console.log(updatedFact);

    axios
      .put(`${import.meta.env.VITE_API_URL}/artifact/${id}`, updatedFact)
      .then((res) => {
        // console.log(res.data);
        // form.reset();
        toast.success("Data updated Successfully!!!");
        navigate("/myArtifacts");
      });
  };
  return (
    <div>
      <Helmet>
        <title>Add Artifact - ArtifactArc</title>
        <meta name="description" content="Add a new artifact to ArtifactArc." />
      </Helmet>
      <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-5">
          Update {artifactName}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Artifact Name */}
          <div className="form-control">
            <label className="block font-medium mb-2">Artifact Name</label>
            <input
              type="text"
              name="artifactName"
              // value={formData.artifactName}
              // onChange={handleChange}
              defaultValue={artifactName}
              placeholder="Enter the Artifact Name"
              className="input input-bordered rounded-none w-full"
              required
            />
          </div>

          {/* Artifact Image */}
          <div className="form-control">
            <label className="block font-medium mb-2">
              Artifact Image (URL)
            </label>
            <input
              type="url"
              name="artifactImage"
              // value={formData.artifactImage}
              // onChange={handleChange}
              defaultValue={artifactImage}
              placeholder="Enter the Artifact Image URL"
              className="input input-bordered rounded-none w-full"
              required
            />
          </div>

          {/* Artifact Type */}
          <div className="form-control">
            <label className="block font-medium mb-2">Artifact Type</label>
            <select
              name="artifactType"
              // value={formData.artifactType}
              onChange={handleChange}
              value={type}
              className="select select-bordered rounded-none w-full"
            >
              <option value="">Select an option</option>
              <option value="Tools">Tools</option>
              <option value="Weapons">Weapons</option>
              <option value="Documents">Documents</option>
              <option value="Writings">Writings</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Historical Context */}
          <div className="form-control">
            <label className="block font-medium mb-2">Historical Context</label>
            <textarea
              name="historicalContext"
              // value={formData.historicalContext}
              // onChange={handleChange}
              defaultValue={historicalContext}
              placeholder="Enter the Artifact Context"
              className="textarea textarea-bordered rounded-none w-full"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Created At & Discover At */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Created At */}
            <div className="form-control">
              <label className="block font-medium mb-2">Created At</label>
              <input
                type="text"
                name="createdAt"
                // value={formData.createdAt}
                onChange={handleChange}
                defaultValue={createdAt}
                className="input input-bordered rounded-none w-full"
                placeholder="e.g., 100 BC"
                required
              />
            </div>

            {/* Discovered At */}
            <div className="form-control">
              <label className="block font-medium mb-2">Discovered At</label>
              <input
                type="text"
                name="discoveredAt"
                // value={formData.discoveredAt}
                onChange={handleChange}
                defaultValue={discoveredAt}
                className="input input-bordered rounded-none w-full"
                placeholder="e.g., 1799"
                required
              />
            </div>
          </div>

          {/* Discover By & Present Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Discovered By */}
            <div className="form-control">
              <label className="block font-medium mb-2">Discovered By</label>
              <input
                type="text"
                name="discoveredBy"
                // value={formData.discoveredBy}
                onChange={handleChange}
                defaultValue={discoveredBy}
                placeholder="Who discover this?"
                className="input input-bordered rounded-none w-full"
                required
              />
            </div>

            {/* Present Location */}
            <div className="form-control">
              <label className="block font-medium mb-2">Present Location</label>
              <input
                type="text"
                name="presentLocation"
                // value={formData.presentLocation}
                onChange={handleChange}
                defaultValue={presentLocation}
                placeholder="Present Location"
                className="input input-bordered rounded-none w-full"
                required
              />
            </div>
          </div>

          {/* Artifact Adder Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="block font-medium mb-2">
                Artifact Adder Name
              </label>
              <input
                type="text"
                name="artifactAdderName"
                defaultValue={user?.displayName}
                readOnly={true}
                className="input input-bordered rounded-none w-full bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="form-control">
              <label className="block font-medium mb-2">
                Artifact Adder Email
              </label>
              <input
                type="email"
                name="artifactAdderEmail"
                defaultValue={user?.email}
                readOnly={true}
                className="input input-bordered rounded-none w-full bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control">
            <button
              type="submit"
              className="btn btn-neutral rounded-none w-full"
            >
              Update Artifact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateArtifacts;
