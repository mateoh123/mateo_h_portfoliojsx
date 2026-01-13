import React from "react";

const DescriptionSection = ({ tagline, description }) => {
  return (
    <div className="flex flex-wrap pl-4 pr-4">
      <h3 className="font-bold text-4xl pb-1 font-source_san_3">{tagline}</h3>
      <p className="font-source_san_3">{description}</p>
    </div>
  );
};

export default DescriptionSection;
