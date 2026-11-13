import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumeLayout from "../src/layout/ResumeLayout";
import MySkills from "./pages/MySkills";
import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import PortfolioLayout from "./layout/PortfolioLayout";
import PortfolioHeaderAll from "./pages/PortfolioHeaderAll";
import PortfolioHeaderApplications from "./pages/PortfolioHeaderApplications";
import PortfolioHeaderWebDevelopment from "./pages/PortfolioHeaderWebDevelopment";

const App = () => {
  return (
    <div>
      <Router>
        {/* <ResumeLayout/> */}
        <Routes>
          <Route path="/" element={<ResumeLayout />}>
            <Route path="/" element={<About />} />
            <Route path="/my_skills" element={<MySkills />} />

            <Route path="portfolio" element={<PortfolioLayout />} >
              <Route index element={<PortfolioHeaderAll />} />
              <Route path="portfolio_all" element={<PortfolioHeaderAll />} />
              <Route path="portfolio_applications" element={<PortfolioHeaderApplications />} />
              <Route path="web_development" element={<PortfolioHeaderWebDevelopment />} />
            </Route>

            <Route path="/contact" element={<Contact />} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;