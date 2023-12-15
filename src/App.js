import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import BackToTopBtn from "components/BackToTopBtn/BackToTopBtn";
import Home from "./pages/Home/Home";
import ProjectPage from "pages/ProjectPage/ProjectPage";
import NotFound from "pages/NotFound/NotFound";
import { DataContext } from "./DataContext";

function App() {
  const [appData, setAppData] = useState(null); // global data

  useEffect(() => {
    AOS.init({
      once: true,
    });

    // add scroll position property to html element
    // so that it can be accessed from css
    const handleScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    };
    handleScroll(); // set current scroll position

    document.addEventListener("scroll", handleScroll);

    fetch("/appData.json")
      .then((response) => response.json())
      .then((data) => setAppData(data));

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (appData && 
    <DataContext.Provider value={appData}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />

              {/* project pages */}
              {Object.entries(appData.projects).map(
                  ([projectRoute, projectData]) => (
                    <Route
                      key={projectRoute}
                      exact
                      path={projectRoute}
                      element={
                        <ProjectPage projectData={projectData}></ProjectPage>
                      }
                    />
                  )
                )}

              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </div>
          <BackToTopBtn />
        </div>
      </Router>
    </DataContext.Provider>
  );
}

export default App;

