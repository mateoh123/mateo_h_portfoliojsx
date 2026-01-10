import { Link } from "react-router-dom";
import pdfResume from "../work_assets/Hernandez_Mateo_Resume25W.pdf";
import blackButton from "../assets/blackbutton.png";
import whiteButton from "../assets/whitebutton.png";

const GetIT = () => {
  return (
    <div className="w-full flex items-center justify-center border-y-4 bg-stone-950 p-3 gap-2">
      <div className="flex-grow grid grid-cols-2">
        {/* Resume Button */}
        <a href={pdfResume} target="_blank" rel="noreferrer">
          <div className="group relative w-56 h-28 cursor-pointer">
            <img
              src={blackButton}
              alt="Default"
              className="absolute inset-0 w-full h-full opacity-100 transition-opacity group-hover:opacity-0"
            />
            <img
              src={whiteButton}
              alt="Hover"
              className="absolute inset-0 w-full h-full opacity-0 transition-opacity group-hover:opacity-100"
            />
            <div className="absolute top-1/2 left-1/2 z-0 -translate-y-2/4 -translate-x-2/4 text-center overflow-hidden text-slate-50 hover:text-slate-950">
              <h3 className="font-source_sans_3 font-bold text-4xl">Resume</h3>
            </div>
          </div>
        </a>

        {/* Contact Button */}
        <Link to="/dropdown">
          <div className="group relative w-56 h-28 cursor-pointer">
            <img
              src={whiteButton}
              alt="Default"
              className="absolute inset-0 w-full h-full opacity-100 transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={blackButton}
              alt="Hover"
              className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="absolute top-1/2 left-1/2 z-0 -translate-y-2/4 -translate-x-2/4 text-center overflow-hidden text-slate-950 hover:text-slate-50">
              <h3 className="font-source_sans_3 font-bold text-4xl">Contact</h3>
            </div>
          </div>
        </Link>
      </div>

      <h1 className="text-8xl text-stone-50 font-bold flex justify-end m-0 p-0 ">
        GET IN TOUCH
      </h1>
    </div>
  );
};

export default GetIT;
