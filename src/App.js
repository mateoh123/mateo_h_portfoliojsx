import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="col-span-5 relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
