const SoftwareUsed = ({ skills, software, language }) => {
  return (
    <div className="flex gap-1 pl-4 pr-4 pt-4 font-source_san_3 font-bold text-2xl text-center">
      <div className="flex-1 flex-col">
        <h4 className="pb-1">Skills</h4>
        <div className="pb-1">{skills}</div>
      </div>

      <div className="flex-1 flex-col">
        <h4 className="pb-1">Software</h4>
        <div className="">{software}</div>
      </div>

      {language && (
        <div className="flex-1 flex-col">
          <h4 className="pb-1">Language</h4>
          <div>{language}</div>
        </div>
      )}
    </div>
  );
};

export default SoftwareUsed;
