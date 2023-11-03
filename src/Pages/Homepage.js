import React, { useState } from "react";
import CVBuilderForm from "../Components/CVBuilderForm";

const Homepage = () => {
  const [cvBuilderFormOpen, setCvBuilderFormOpen] = useState(false);
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to CV Builder</h1>
          <p className="text-lg mb-8">Create your perfect CV with ease</p>
          <button
            type="button"
            onClick={() => setCvBuilderFormOpen(true)}
            className="bg-white text-purple-600 hover:text-pink-600 hover:bg-pink-100 py-2 px-4 rounded-full text-lg font-semibold transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

      <CVBuilderForm
        open={cvBuilderFormOpen}
        handleClose={() => setCvBuilderFormOpen(false)}
      />
    </div>
  );
};

export default Homepage;
