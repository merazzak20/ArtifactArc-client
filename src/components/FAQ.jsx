import React from "react";

const FAQ = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold my-10">FAQ's</h2>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is ArtifactArc?
          </div>
          <div className="collapse-content">
            <p>
              ArtifactArc is a digital platform for exploring, documenting, and
              sharing historical artifacts. It allows users to browse a
              collection of relics, add new discoveries, and learn about the
              stories behind these treasures.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Who can contribute to ArtifactArc?
          </div>
          <div className="collapse-content">
            <p>
              Anyone with a passion for history can contribute. Registered users
              can add artifacts, provide detailed information, and share images.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How do I add an artifact?
          </div>
          <div className="collapse-content">
            <p>
              Simply log in to your account, navigate to the "Add Artifact"
              section, and fill in the required details such as artifact name,
              image, type, and historical context.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
