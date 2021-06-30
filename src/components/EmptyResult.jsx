import React from "react";

const EmptyResult = () => {
  return (
    <div className="container empty-result" style={{ height: "500px" }}>
      <h3>Search Results</h3>
      <p>Sorry For The Inconvenience.</p>
      <p>Search again what you are looking for</p>
    </div>
  );
};

export default EmptyResult;
