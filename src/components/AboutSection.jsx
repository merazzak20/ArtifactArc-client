import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto  p-8  rounded-lg mb-10 text-justify">
              <h3 className="text-4xl font-bold text-gray-700 mb-4">
                About Us
              </h3>

              <p className="text-lg text-gray-700">
                At <strong>ArtifactArc</strong>, we bring history to life by
                creating a digital space where timeless treasures from the past
                are celebrated, preserved, and shared. Our mission is to connect
                people with the fascinating stories behind historical artifacts,
                from iconic relics like the Rosetta Stone to lesser-known gems
                awaiting discovery.
              </p>

              <p className="text-lg text-gray-700 mt-4">
                Whether you're an enthusiast, a researcher, or a casual
                explorer, ArtifactArc offers an engaging platform to browse,
                learn about, and contribute to a growing collection of
                artifacts. Users can add their own discoveries, like their
                favorite pieces, and keep track of their contributions,
                fostering a community dedicated to preserving the richness of
                our shared heritage.
              </p>

              <Link className="btn btn-neutral rounded-none mt-4">
                Read More
              </Link>
            </div>

            {/* How Users Learn Vocabulary */}
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
              <div className="mb-5">
                <h2 className="text-2xl font-semibold text-[#06283d]">
                  Mission
                </h2>
                <p>
                  To preserve and celebrate humanity's shared heritage by
                  creating an engaging platform for exploring and documenting
                  historical artifacts.
                </p>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl font-semibold text-[#06283d]">
                  Vision
                </h2>
                <p>
                  To become the go-to digital archive for uncovering the stories
                  of the past and connecting them to the present, inspiring
                  future generations.
                </p>
              </div>

              <div className="mt-5 space-y-2">
                <h2 className="text-2xl font-semibold text-[#06283d]">
                  Values
                </h2>
                <p>
                  <span className="font-bold">Preservation:</span> Safeguarding
                  history for the future.
                </p>
                <p>
                  <span className="font-bold">Community:</span> Fostering
                  collaboration and shared learning.
                </p>
                <p>
                  <span className="font-bold">Accessibility:</span> Making
                  history available to all.
                </p>
                <p>
                  <span className="font-bold">Integrity:</span> Ensuring the
                  authenticity and accuracy of every artifact story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
