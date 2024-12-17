import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import Home from "pages/Home/Home";
import ProjectPage from "pages/Project/Project";
import NotFound from "pages/NotFound/NotFound";
import { AppDataContext } from "./DataContext";


function App() {
  const [appData, setAppData] = useState(null); // global data

  useEffect(() => {
    fetch("/appData.json")
      .then((response) => response.json())
      .then((data) => setAppData(data));
  }, []);

  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  return (
    appData && (
      <AppDataContext.Provider value={appData}>
          <Router>
            <Navbar />
            <main id="main" className="content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                {appData.projects.map((project) => (
                  <Route
                    key={project.id}
                    exact
                    path={project.customSlug || `/projects/${project.id}`}
                    element={<ProjectPage project={project} />}
                  />
                ))}
                <Route exact path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </Router>
      </AppDataContext.Provider>
    )
  );
}

export default App;

