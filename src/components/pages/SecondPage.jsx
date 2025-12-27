import React from "react";
import { Link } from "react-router-dom";

const SecondPage = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Second Page</h1>
      <p className="mb-6">
        You have successfully navigated to the second page.
      </p>
      <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
        Go back Home
      </Link>
    </div>
  );
};

export default SecondPage;
