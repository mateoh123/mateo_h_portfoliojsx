import React, { useState } from "react";
import WorkCard from "../components/WorkCard";
import DescriptionSection from "../components/DescriptionSection"; // optional

const RecentWork = () => {
  const [openModalId, setOpenModalId] = useState(null);
  // Define all work items here
  const workItems = [
    {
      id: "modal1",
      title: "20 To 10",
      date: "February - 22 - 2025",
      image: require("../work_assets/icons/20to10_icon.avif"),
      children: <DescriptionSection />,
    },
    {
      id: "modal2",
      title: "V00TING 1S C001",
      date: "November - 1 - 2024",
      image: require("../work_assets/icons/Lamar_UpClose.webp"),
      children: <DescriptionSection />,
    },
    {
      id: "modal3",
      title: "Across The Amtrak",
      date: "August - 24 - 2024",
      image: require("../work_assets/icons/Untitled-1.webp"),
      children: <DescriptionSection />,
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-evenly m-4">
        {workItems.map((item) => (
          <WorkCard
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            image={item.image}
            openModalId={openModalId}
            setOpenModalId={setOpenModalId}
          >
            {item.children}
          </WorkCard>
        ))}
      </div>
      <h1 className="text-8xl font-bold flex justify-left pl-5 font-source_san_3">
        RECENT WORK
      </h1>
    </>
  );
};

export default RecentWork;
