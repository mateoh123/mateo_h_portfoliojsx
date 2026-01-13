import React, { useState } from "react";
import WorkCard from "../components/WorkCard";
import DescriptionSection from "../components/DescriptionSection";
import ModalImageGrid from "../components/ModalImageGrid";
import SoftwareUsed from "../components/SoftwareUsed";

import cameraSoftware from "../assets/skills_softwares_languages/softwares/canoneossoftware.png";
import photoshopSoftware from "../assets/skills_softwares_languages/softwares/apsoftware.png";
import illustratorSoftware from "../assets/skills_softwares_languages/softwares/aisoftware.png";
import photographySkill from "../assets/skills_softwares_languages/skills/photographyskill.png";
import creativedirectingSkill from "../assets/skills_softwares_languages/skills/creativedirectingskill.png";

import unselectedcamerafilter from "../assets/categorybadges/whitecamerabadge.png";
import unselectedcodingfilter from "../assets/categorybadges/whitecodingbadge.png";
import unselectedcomputerfilter from "../assets/categorybadges/whitecomputerbadge.png";
import unselectedxrfilter from "../assets/categorybadges/whitexrbadge.png";

const WorkPage = () => {
  const [openModalId, setOpenModalId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  const [activeSoftware, setActiveSoftware] = useState([]);
  const softwareOptions = ["Photoshop", "Illustrator", "Camera"];

  const tags = [
    { id: "photography", icon: unselectedcamerafilter },
    { id: "design", icon: unselectedcodingfilter },
    { id: "political", icon: unselectedcomputerfilter },
    { id: "collage", icon: unselectedxrfilter },
  ];

  /* -------------------- DATA -------------------- */
  const workItems = [
    {
      id: "modal1",
      title: "20 To 10",
      date: "February 2025",
      image: require("../work_assets/icons/20to10_icon.avif"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["photography", "collage"],
      software: ["Photoshop"],
      children: (
        <>
          <ModalImageGrid folder="twentytotenPhotos" />
          <DescriptionSection
            tagline="I know less at 20, than I did at 10"
            description="A collage reflecting uncertainty, memory, and personal growth."
          />
          <SoftwareUsed
            skills={
              <>
                <img src={photographySkill} className="h-16" />
                <img src={creativedirectingSkill} className="h-16" />
              </>
            }
            software={
              <>
                <img src={cameraSoftware} className="h-16" />
                <img src={photoshopSoftware} className="h-16" />
                <img src={illustratorSoftware} className="h-16" />
              </>
            }
          />
        </>
      ),
    },
    {
      id: "modal2",
      title: "V00TING 1S C001",
      date: "November 2024",
      image: require("../work_assets/icons/Lamar_UpClose.webp"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["political", "design"],
      software: ["Illustrator"],
      children: (
        <DescriptionSection
          tagline="V00TING 1S C001"
          description="A political design exploration."
        />
      ),
    },
    {
      id: "modal3",
      title: "Across The Amtrak",
      date: "August 2024",
      image: require("../work_assets/icons/Untitled-1.webp"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["photography"],
      software: ["Camera"],
      children: (
        <DescriptionSection
          tagline="Across The Amtrak"
          description="A travel-based photographic study."
        />
      ),
    },
  ];

  /* -------------------- FILTERING -------------------- */
  const filteredWork = workItems.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesTags =
      activeTags.length === 0 ||
      activeTags.some((tag) => item.tags.includes(tag));

    const matchesSoftware =
      activeSoftware.length === 0 ||
      activeSoftware.some((tool) => item.software.includes(tool));

    return matchesSearch && matchesTags && matchesSoftware;
  });

  /* -------------------- CLEAR FILTERS -------------------- */
  const clearFilters = () => {
    setSearchTerm("");
    setActiveTags([]);
    setActiveSoftware([]);
  };

  /* -------------------- RENDER -------------------- */
  return (
    <>
      {/* Search */}
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md p-2 border border-black rounded-md mb-4"
      />

      {/* Tags */}
      <div className="flex gap-3 mb-4 flex-wrap">
        {tags.map((tag) => {
          const isActive = activeTags.includes(tag.id);

          return (
            <button
              key={tag.id}
              onClick={() =>
                setActiveTags((prev) =>
                  prev.includes(tag.id)
                    ? prev.filter((t) => t !== tag.id)
                    : [...prev, tag.id]
                )
              }
              className={`group relative p-2 rounded-lg border transition ${
                isActive
                  ? "border-black bg-black/10"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={tag.icon}
                alt={tag.id}
                className={`h-10 w-10 object-contain transition ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              />

              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition">
                {tag.id}
              </span>
            </button>
          );
        })}
      </div>

      {/* Software Filters */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {softwareOptions.map((tool) => (
          <label key={tool} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={activeSoftware.includes(tool)}
              onChange={() =>
                setActiveSoftware((prev) =>
                  prev.includes(tool)
                    ? prev.filter((s) => s !== tool)
                    : [...prev, tool]
                )
              }
            />
            {tool}
          </label>
        ))}
      </div>

      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        className="px-4 py-2 border border-black rounded-md mb-6 hover:bg-black hover:text-white transition"
      >
        Clear Filters
      </button>

      {/* Cards */}
      <div className="flex flex-wrap justify-evenly m-4">
        {filteredWork.map((item) => (
          <WorkCard
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            image={item.image}
            badge={item.badge}
            openModalId={openModalId}
            setOpenModalId={setOpenModalId}
          >
            {item.children}
          </WorkCard>
        ))}

        {filteredWork.length === 0 && (
          <p className="w-full text-center opacity-50 mt-8">
            No projects match your filters
          </p>
        )}
      </div>
    </>
  );
};

export default WorkPage;
