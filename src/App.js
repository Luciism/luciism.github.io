import BackToTopBtn from 'components/BackToTopBtn/BackToTopBtn';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import ProjectPage from 'pages/ProjectPage/ProjectPage';
import ScrollToTop from 'ScrollToTop';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true
    });

    // add scroll position property to html element
    // so that it can be accessed from css
    const handleScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    }
    handleScroll() // set current scroll position

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/projects/test"
              element={
                <ProjectPage
                  projectData={{
                    title: "STATALYTICS",
                    description: {
                      short:
                        "Statalytics is a Bedwars stats bot that offers superior speed, and reliability, real-time stats, visualizations, and regular updates.",
                      long: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, architecto libero voluptates culpa maxime fugit aperiam cumque, delectus eaque distinctio a similique corrupti voluptatem, quam dicta sunt veniam?",
                    },
                    links: {
                      website: "https://statalytics.net/",
                      github: "https://statalytics.net/github",
                    },
                    images: [
                      "https://media.discordapp.net/attachments/1027817138095915068/1182455834907783260/image.png?ex=6584c2d0&is=65724dd0&hm=d4d9e4f3dd031113bb4f99c3714bd5cf0b4f1a162ea97ffa0741eecf3f2d5ac6&=&format=webp&quality=lossless",
                      "https://media.discordapp.net/attachments/1027817138095915068/1182455834907783260/image.png?ex=6584c2d0&is=65724dd0&hm=d4d9e4f3dd031113bb4f99c3714bd5cf0b4f1a162ea97ffa0741eecf3f2d5ac6&=&format=webp&quality=lossless",
                      "https://media.discordapp.net/attachments/1027817138095915068/1182455834907783260/image.png?ex=6584c2d0&is=65724dd0&hm=d4d9e4f3dd031113bb4f99c3714bd5cf0b4f1a162ea97ffa0741eecf3f2d5ac6&=&format=webp&quality=lossless",
                      "https://media.discordapp.net/attachments/1027817138095915068/1182455834907783260/image.png?ex=6584c2d0&is=65724dd0&hm=d4d9e4f3dd031113bb4f99c3714bd5cf0b4f1a162ea97ffa0741eecf3f2d5ac6&=&format=webp&quality=lossless",
                    ],
                    tools: [
                      "Python", "Javascript", "HTML", "CSS", "Sqlite3", "Flask", "PIL"
                    ]
                  }}
                />
              }
            />
            {/* <Route exact path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
        <BackToTopBtn />
      </div>
    </Router>
  );
}

export default App;











