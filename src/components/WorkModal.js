import React, { useEffect } from "react";
import workModalBackground from "../assets/WorkModalBackground.png";
import exitX from "../assets/exitx.png";

const WorkModal = ({ isOpen, onClose, children, workTitle }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex justify-end overflow-hidden"
      onClick={onClose}
    >
      <div
        className="relative w-4/6 h-screen overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={workModalBackground}
          alt="Modal Background"
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col h-5/6 w-9/12">
            <div className="sticky top-0 flex justify-between items-center p-1 ">
              <h2 className="text-3xl font-bold font-stretch-extra-expanded text-black ml-4">
                {workTitle}
              </h2>
              <button
                onClick={onClose}
                className="text-black text-3xl hover:opacity-70"
              >
                <img
                  src={exitX}
                  width="24"
                  height="24"
                  alt="X"
                  className="hover:scale-125"
                />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pb-6 overscroll-contain">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;
