import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
