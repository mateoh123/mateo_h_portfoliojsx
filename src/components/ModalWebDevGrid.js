import React from "react";

const ModalWebDevGrid = ({ image, alt = "Web design preview" }) => {
  return (
    <div className="w-full max-h-[70vh] overflow-y-auto">
      <img src={image} alt={alt} className="w-full h-auto" />
    </div>
  );
};

export default ModalWebDevGrid;
