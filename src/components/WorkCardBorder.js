import WorkCardBorderImage from "../assets/WorkBorder.png";

const WorkCardBorder = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer w-80 p-2 flex flex-col gap-2 mb-4 grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-105"
    >
      <img
        src={WorkCardBorderImage}
        alt="Work Card Border"
        className="pointer-events-none absolute inset-0 h-full w-full object-fill z-10 scale-110"
      />
      <div className="relative z-0 p-4 overflow-hidden">{children}</div>
    </div>
  );
};

export default WorkCardBorder;
