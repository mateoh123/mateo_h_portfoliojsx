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
    { id: "Photography", icon: unselectedcamerafilter },
    { id: "Coding", icon: unselectedcodingfilter },
    { id: "Web Development", icon: unselectedcomputerfilter },
    { id: "Extended Reality", icon: unselectedxrfilter },
  ];

  /* -------------------- DATA -------------------- */
  const workItems = [
    {
      id: "1",
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
            description="What does it mean when you turn 20? Are you supposed to know everything?
             Are you still supposed to be confused about everything around you? Inspired by grid collages
              and my personal feelings of being confused about everything at 20; I made a collage of those
               feelings. Putting together things I've held dear to myself; music, my headphones, floral
              patterns. It's an all-encompassing collage of not only me at 20 but aspects of me at all stages
               of my life."
          />
          <SoftwareUsed
            skills={
              <>
                <img
                  src={photographySkill}
                  alt="Photography"
                  className="h-16"
                />
                <img
                  src={creativedirectingSkill}
                  alt="Creative Directing"
                  className="h-16"
                />
              </>
            }
            software={
              <>
                <img
                  src={cameraSoftware}
                  alt="Canon Rebel EOS T7"
                  className="h-16"
                />
                <img
                  src={photoshopSoftware}
                  alt="Adobe Photoshop"
                  className="h-16"
                />
                <img
                  src={illustratorSoftware}
                  alt="Adobe Illustrator"
                  className="h-16"
                />
              </>
            }
          />
        </>
      ),
    },
    {
      id: "2",
      title: "V00TING 1S C001",
      date: "November 2024",
      image: require("../work_assets/icons/Lamar_UpClose.webp"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["political", "design"],
      software: ["Illustrator"],
      children: (
        <>
          <ModalImageGrid folder="votingiscoolPhotos" />
          <DescriptionSection
            tagline="V00TING 1S C001"
            description="This project began as a conversation with a friend about how to make voting more appealing to younger audiences. 
            Inspired by the clean, elegant aesthetic of clothing campaigns from brands like ZARA and H&M, the 
            initial concept was to create a minimalist and sophisticated series urging people to vote.However, the idea evolved into a whimsical and playful approach, 
            designed to resonate with a broader audience. By focusing on fun and lighthearted visuals, the photos use selective coloring to highlight the 'I Voted' stickers. 
            This intentional design choice draws the audience's attention to the sticker, subtly encouraging civic engagement while keeping the tone approachable and memorable."
          />
          <SoftwareUsed
            skills={
              <>
                <img
                  src={photographySkill}
                  alt="Photography"
                  className="h-16"
                />
                <img
                  src={creativedirectingSkill}
                  alt="Creative Directing"
                  className="h-16"
                />
              </>
            }
            software={
              <>
                <img
                  src={cameraSoftware}
                  alt="Canon Rebel EOS T7"
                  className="h-16"
                />
                <img
                  src={photoshopSoftware}
                  alt="Adobe Photoshop"
                  className="h-16"
                />
              </>
            }
          />
        </>
      ),
    },
    {
      id: "3",
      title: "Across The Amtrak",
      date: "August 2024",
      image: require("../work_assets/icons/Untitled-1.webp"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["photography"],
      software: ["Camera"],
      children: (
        <>
          <ModalImageGrid folder="acrosstheamtrakPhotos" />
          <DescriptionSection
            tagline="Now that i've finally moved on..."
            description="On my journey back to New York City for the new school year, I traveled
             cross-country on Amtrak, capturing moments along the way. This experience allowed me 
             to explore new places like New Mexico and revisit new places like Chicago, that now
              hold bittersweet memories, of love I want to rekindle in the future and pain I hope to
               never feel again. Through these photos, I commemorated a unique adventure that blended
                discovery and nostalgia, documenting the beauty of the landscapes and cities that shaped
                 my trip."
          />
          <SoftwareUsed
            skills={
              <>
                <img
                  src={photographySkill}
                  alt="Photography"
                  className="h-16"
                />
              </>
            }
            software={
              <>
                <img
                  src={cameraSoftware}
                  alt="Canon Rebel EOS T7"
                  className="h-16"
                />
                <img
                  src={photoshopSoftware}
                  alt="Adobe Photoshop"
                  className="h-16"
                />
              </>
            }
          />
        </>
      ),
    },
    {
      id: "4",
      title: "Birth From Sea Foam",
      date: "August 2024",
      image: require("../work_assets/icons/sea_foam_icon.webp"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["photography"],
      software: ["Camera"],
      children: (
        <>
          <ModalImageGrid folder="seafoamPhotos" />
          <DescriptionSection
            tagline="On A Cold Friday Night..."
            description="Drawing inspiration from the 'Office Siren' fashion aesthetic and the 
            iconic painting 'The Birth of Aphrodite', I crafted a unique take on beach photography. 
            By blending elegance and surrealism, I used Photoshop to add water droplets, inviting viewers 
            to not just see the scene but feel immersed in it. Through iridescent colors and dynamic 
            compositions, I aimed to bring these photos to life, evoking both the essence of their vibrant 
            setting and a sense of ethereal beauty."
          />
          <SoftwareUsed
            skills={
              <>
                <img
                  src={photographySkill}
                  alt="Photography"
                  className="h-16"
                />
                <img
                  src={creativedirectingSkill}
                  alt="Creative Directing"
                  className="h-16"
                />
              </>
            }
            software={
              <>
                <img
                  src={cameraSoftware}
                  alt="Canon Rebel EOS T7"
                  className="h-16"
                />
                <img
                  src={photoshopSoftware}
                  alt="Adobe Photoshop"
                  className="h-16"
                />
              </>
            }
          />
        </>
      ),
    },
    {
      id: "5",
      title: "Think Of Me",
      date: "June 2024",
      image: require("../work_assets/icons/early_morn_icon.webp"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["photography"],
      software: ["Camera"],
      children: (
        <>
          <ModalImageGrid folder="thinkofmePhotos" />
          <DescriptionSection
            tagline="Keep Thinking..."
            description="During a trip to Roosevelt Island, I stumbled upon a sprawling field that 
            perfectly framed the Manhattan skyline ahead and the bridge behind. Captivated by the sunset, 
            I found myself reflecting on how to capture the moment. From this introspection came a personal 
            project—a series of self-portraits intended to present myself in a new light. Through these images, 
            I hoped to convey a sense of connection, inviting viewers to see me as part of the landscape’s 
            beauty and emotion."
          />
          <SoftwareUsed
            skills={
              <>
                <img
                  src={photographySkill}
                  alt="Photography"
                  className="h-16"
                />
                <img
                  src={creativedirectingSkill}
                  alt="Creative Directing"
                  className="h-16"
                />
              </>
            }
            software={
              <>
                <img
                  src={cameraSoftware}
                  alt="Canon Rebel EOS T7"
                  className="h-16"
                />
                <img
                  src={photoshopSoftware}
                  alt="Adobe Photoshop"
                  className="h-16"
                />
              </>
            }
          />
        </>
      ),
    },
    {
      id: "6",
      title: "Sonicon Ava",
      date: "May 2024",
      image: require("../work_assets/icons/sonicon_icon.webp"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["photography"],
      software: ["Camera"],
      children: (
        <>
          <ModalImageGrid folder="soniconavaPhotos" />
          <DescriptionSection
            tagline="Under Blurry Lights..."
            description="On the final day of my freshman year, while exploring with friends, we came 
            across a serene waterfront at the Brooklyn Promenade. Inspired by the moment's spontaneity, 
            I experimented with the interplay of unsteady rocks, exposure, and shutter speed. The result 
            was a series of photos that captured dynamic, light-inspired patterns—evoking a mesmerizing light 
            show that reminded me of the vibrant energy of my friend Ava."
          />
          <SoftwareUsed
            skills={
              <>
                <img
                  src={photographySkill}
                  alt="Photography"
                  className="h-16"
                />
                <img
                  src={creativedirectingSkill}
                  alt="Creative Directing"
                  className="h-16"
                />
              </>
            }
            software={
              <>
                <img
                  src={cameraSoftware}
                  alt="Canon Rebel EOS T7"
                  className="h-16"
                />
                <img
                  src={photoshopSoftware}
                  alt="Adobe Photoshop"
                  className="h-16"
                />
              </>
            }
          />
        </>
      ),
    },
    {
      id: "7",
      title: "Central Park Whismy",
      date: "May 2024",
      image: require("../work_assets/icons/central_icon.webp"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["photography"],
      software: ["Camera"],
      children: (
        <>
          <ModalImageGrid folder="centralparkwhismyPhotos" />
          <DescriptionSection
            tagline="In The Depths Of The Cities Forest..."
            description="Growing up in Pasadena, California, I’ve always been drawn to nature as a
             natural backdrop for my photography. During a picnic in Central Park, I set out to capture
              my friend’s whimsical personality through a series of portraits. Inspired by her vibrant energy,
               I aimed to create images that felt light, free, and full of life. Using color grading to achieve
                an iridescent quality, I sought to evoke a dreamlike atmosphere, bringing her unique essence
                 to life in each frame."
          />
          <SoftwareUsed
            skills={
              <>
                <img
                  src={photographySkill}
                  alt="Photography"
                  className="h-16"
                />
                <img
                  src={creativedirectingSkill}
                  alt="Creative Directing"
                  className="h-16"
                />
              </>
            }
            software={
              <>
                <img
                  src={cameraSoftware}
                  alt="Canon Rebel EOS T7"
                  className="h-16"
                />
                <img
                  src={photoshopSoftware}
                  alt="Adobe Photoshop"
                  className="h-16"
                />
              </>
            }
          />
        </>
      ),
    },
    {
      id: "8",
      title: "Big City",
      date: "March 2024",
      image: require("../work_assets/icons/sona_icon.webp"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["photography"],
      software: ["Camera"],
      children: (
        <>
          <ModalImageGrid folder="bigcityPhotos" />
          <DescriptionSection
            tagline="All Around The City..."
            description="Inspired by the multifaceted nature of New York City, I set out
             to capture its contrasting energies through photography. In Central Park, I focused
              on the serene, gradual growth of nature, showcasing its quiet beauty. In contrast, 
              I photographed the bustling steps of The Met, an iconic cultural landmark that embodies
               the city's vibrant and dynamic pace. Together, these images illustrate the striking duality
                of life in New York City—a harmonious blend of tranquility and intensity."
          />
          <SoftwareUsed
            skills={
              <>
                <img
                  src={photographySkill}
                  alt="Photography"
                  className="h-16"
                />
                <img
                  src={creativedirectingSkill}
                  alt="Creative Directing"
                  className="h-16"
                />
              </>
            }
            software={
              <>
                <img
                  src={cameraSoftware}
                  alt="Canon Rebel EOS T7"
                  className="h-16"
                />
                <img
                  src={photoshopSoftware}
                  alt="Adobe Photoshop"
                  className="h-16"
                />
              </>
            }
          />
        </>
      ),
    },
    {
      id: "9",
      title: "ALLYSON'S VALENTINE",
      date: "February 2024",
      image: require("../work_assets/icons/valentine_icon.webp"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["photography"],
      software: ["Camera"],
      children: (
        <>
          <ModalImageGrid folder="allysonsvalentinePhotos" />
          <DescriptionSection
            tagline="First Valentine Alone..."
            description="This project marked my first deliberate exploration of colored lighting
             to evoke emotion. The concept was simple yet impactful: capture the feelings of rejection
              and loneliness on Valentine’s Day. The barren, gritty concrete backdrop paired with the
               isolating tones of the lighting perfectly conveyed the raw emotion I aimed to express,
                creating a series of images that resonate with a sense of solitude and vulnerability."
          />
          <SoftwareUsed
            skills={
              <>
                <img
                  src={photographySkill}
                  alt="Photography"
                  className="h-16"
                />
                <img
                  src={creativedirectingSkill}
                  alt="Creative Directing"
                  className="h-16"
                />
              </>
            }
            software={
              <>
                <img
                  src={cameraSoftware}
                  alt="Canon Rebel EOS T7"
                  className="h-16"
                />
                <img
                  src={photoshopSoftware}
                  alt="Adobe Photoshop"
                  className="h-16"
                />
              </>
            }
          />
        </>
      ),
    },
    {
      id: "10",
      title: "Does He Think Of Me?",
      date: "February 2024",
      image: require("../work_assets/icons/think_icon.avif"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["photography"],
      software: ["Camera"],
      children: (
        <>
          <ModalImageGrid folder="doeshestillthinkofmePhotos" />
          <DescriptionSection
            tagline="My First Time Alone..."
            description="This project marked my first time placing vulnerability at the heart
             of my self-portraiture. Created during a freezing New York winter at 3 a.m., following a 
             personal heartbreak, these photos reflect the sadness and isolation I felt in that moment. 
             Perched on a railing overlooking the river, I sought to capture the lingering ache of yearning 
             for something more yet feeling its absence. The images convey an intimate exploration of loss, 
             longing, and resilience."
          />
          <SoftwareUsed
            skills={
              <>
                <img
                  src={photographySkill}
                  alt="Photography"
                  className="h-16"
                />
              </>
            }
            software={
              <>
                <img
                  src={cameraSoftware}
                  alt="Canon Rebel EOS T7"
                  className="h-16"
                />
                <img
                  src={photoshopSoftware}
                  alt="Adobe Photoshop"
                  className="h-16"
                />
              </>
            }
          />
        </>
      ),
    },
    {
      id: "11",
      title: "THE KIDS OF LA",
      date: "July 2023",
      image: require("../work_assets/icons/kids_icon.webp"),
      badge: require("../assets/categorybadges/camerabadge.png"),
      tags: ["photography"],
      software: ["Camera"],
      children: (
        <>
          <ModalImageGrid folder="thekidsoflaPhotos" />
          <DescriptionSection
            tagline="Homeage To My Friends..."
            description="Inspired by the vibrant, surreal 'trip' aesthetic that emerged 
            during the 2020s quarantine, I created this project in Downtown LA on my last day in California. 
            These photos are a tribute to the moments I want to cherish forever and the friends I hope will 
            remain a part of my life. Through bold, psychedelic color grading, I aimed to capture the joy and 
            optimism of the day, with compositions that frame the limitless sky as a metaphor for boundless 
            possibilities and a hopeful future."
          />
          <SoftwareUsed
            skills={
              <>
                <img
                  src={photographySkill}
                  alt="Photography"
                  className="h-16"
                />
                <img
                  src={creativedirectingSkill}
                  alt="Creative Directing"
                  className="h-16"
                />
              </>
            }
            software={
              <>
                <img
                  src={cameraSoftware}
                  alt="Canon Rebel EOS T7"
                  className="h-16"
                />
                <img
                  src={photoshopSoftware}
                  alt="Adobe Photoshop"
                  className="h-16"
                />
              </>
            }
          />
        </>
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
      <div className="flex m-4 gap-5 justify-center">
        {/* Search */}
        <input
          type="text"
          placeholder="Search projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-screen max-w-md p-2 border-4 border-black rounded-md mb-4 font-source_san_3"
        />

        {/* Tags */}
        <div className="flex gap-1 mb-4 flex-wrap">
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
                className={`group relative p-2 rounded-lg transition ${
                  isActive
                    ? ""
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={tag.icon}
                  alt={tag.id}
                  className={`h-11 w-11 object-contain transition ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />

                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition">
                  {tag.id}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-evenly m-4 gap-5">
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
