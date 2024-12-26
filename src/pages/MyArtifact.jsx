import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MySingleFact from "../components/MySingleFact";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyArtifact = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [craft, setCraft] = useState([]);
  useEffect(() => {
    AllArticrafts();
  }, [user?.email]);
  const AllArticrafts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/artifact`,
      {
        withCredentials: true,
      }
    );

    // const { data } = await axiosSecure.get(`/artifact`);

    // console.log(data);
    const mydData = data.filter((my) => my.artifactAdderEmail === user?.email);
    setCraft(mydData);
    // console.log(craft);
  };
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/artifact/${id}`
      );
      // console.log(data);
      toast.success("Data Deleted Successfully!!!");
      AllArticrafts();
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };

  const modernDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className="gap-2 flex">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };
  return (
    <div>
      <Helmet>
        <title>My Artifacts - ArtifactArc</title>
        <meta name="description" content="Learn more about our company." />
        <meta name="keywords" content="about, company, information" />
      </Helmet>
      <div>
        {craft.length > 0 ? (
          <h2 className="text-center text-3xl font-bold my-5">
            My Artifacts : {craft.length}
          </h2>
        ) : (
          <h2 className="text-center text-3xl font-bold my-5">
            {" "}
            Ops! There is no Available data.{" "}
          </h2>
        )}
      </div>
      <div>
        {craft.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="px-4">
                {craft.map((cr, index) => (
                  <tr key={cr._id} className="">
                    <td className="text-xl font-semibold">{index + 1}</td>
                    <td className="text-xl font-semibold">
                      {cr?.artifactName}
                    </td>
                    <td>{cr?.artifactType}</td>
                    <td>{cr?.presentLocation}</td>
                    <td>
                      <div className="flex gap-3 items-center justify-center">
                        <button
                          onClick={() => modernDelete(cr?._id)}
                          className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                        <Link
                          to={`/updateArtifact/${cr?._id}`}
                          className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MyArtifact;
