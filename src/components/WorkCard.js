import React from "react";
import WorkCardBorder from "./WorkCardBorder";
import WorkModal from "./WorkModal";

const WorkCard = ({
  id,
  title,
  image,
  date,
  badge,
  children,
  openModalId,
  setOpenModalId,
}) => {
  const openModal = () => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);

  return (
    <>
      <WorkCardBorder onClick={openModal}>
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover -mt-4"
        />
        <div className="flex flex-col mt-5">
          <h3 className="text-3xl font-bold font-source_san_3 scale-x-55">
            {title}
          </h3>
          <div className="flex flex-row justify-between">
            <p className="text-xl font-medium font-source_san_3">{date}</p>
            <img src={badge} alt="badge" className="w-1/6" />
          </div>
        </div>
      </WorkCardBorder>

      <WorkModal
        workTitle={title}
        isOpen={openModalId === id}
        onClose={closeModal}
      >
        {children}
      </WorkModal>
    </>
  );
};

export default WorkCard;
