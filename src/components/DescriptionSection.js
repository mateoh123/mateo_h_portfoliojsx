import React from "react";
import checkItOutImg from "../assets/checkitoutButton.png"; // adjust path

const DescriptionSection = ({
  tagline,
  description,
  checkItOut = false,
  link,
}) => {
  return (
    <div className="pl-4 pr-4">
      <div className="flex items-center gap-4">
        <h3 className="font-bold text-4xl font-source_san_3">{tagline}</h3>

        {checkItOut && link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={checkItOutImg}
              alt="Check it out"
              className="h-14 w-auto cursor-pointer hover:opacity-80 transition"
            />
          </a>
        )}
      </div>
      <p className="mt-2 font-source_san_3">{description}</p>
    </div>
  );
};

export default DescriptionSection;
