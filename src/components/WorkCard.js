import WorkCardBorder from "./WorkCardBorder";

const WorkCard = ({ title, image, date, onClick }) => {
  return (
    <WorkCardBorder onClick={onClick}>
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover -mt-4"
        />
      </div>
      <div className=" flex flex-col mt-5">
        <h3 className="text-3xl font-bold font-source_san_3 scale-x-55">
          {title}
        </h3>
        <p className="text-xl italic font-source_san_3">{date}</p>
      </div>
    </WorkCardBorder>
  );
};

export default WorkCard;
