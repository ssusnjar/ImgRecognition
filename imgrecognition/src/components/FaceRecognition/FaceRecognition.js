import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center">
      <div className="absolute mt2">
        <img
          id="inputImage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        ></img>
      </div>
    </div>
  );
};

export default FaceRecognition;