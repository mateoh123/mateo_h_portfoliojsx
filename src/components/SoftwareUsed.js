const SoftwareUsed = ({ skills, software, language }) => {
  return (
    <div className="flex gap-4 px-4 pt-4 font-source_san_3 font-bold text-2xl">
      <div className="flex-1">
        <h4 className="pb-2">Skills</h4>
        <div className="flex flex-wrap gap-1">{skills}</div>
      </div>

      <div className="flex-1">
        <h4 className="pb-2">Software</h4>
        <div className="flex flex-wrap gap-1">{software}</div>
      </div>

      {language && (
        <div className="flex-1">
          <h4 className="pb-2">Languages</h4>
          <div className="flex flex-wrap gap-1">{language}</div>
        </div>
      )}
    </div>
  );
};

export default SoftwareUsed;
