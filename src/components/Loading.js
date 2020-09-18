import React from "react";
import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} alt="loading gif" />
    </div>
  );
};

export default Loading;
