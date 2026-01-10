import bullet from "../assets/Portfolio_Bulletin_ .png";

const SkillsBanner = () => {
  const skills = ["Web Developer", "XR Designer", "Photographer"];

  return (
    <div className="w-full flex justify-around items-center border-y-4 border-stone-950">
      <h1 className="flex items-center gap-4 text-[2rem] font-source_sans_3 font-bold">
        {skills.map((skill, index) => (
          <span key={skill} className="flex items-center gap-4">
            {skill}
            {index < skills.length - 1 && (
              <img
                src={bullet}
                alt="bullet point"
                className="object-scale-down w-6"
              />
            )}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default SkillsBanner;
