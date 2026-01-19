import React from "react";

const ModalVideoGrid = ({ video }) => {
  return (
    <div className="w-full flex justify-center p-4">
      <video className="w-full max-w-4xl rounded-lg" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ModalVideoGrid;
