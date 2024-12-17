import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";

import { AppDataContext } from "DataContext";
import "./Navbar.css";


const setupNavlinks = (
  navLinksContainerRef,
  [activeNavlinkIndex, setActiveNavlinkIndex]
) => {
  const navLinksEl = navLinksContainerRef.current;
  const navlinks = Array.from(navLinksEl.children);

  const listeners = { enter: [], leave: [], click: [] };

  navlinks.forEach((link, i) => {
    // Activate navlink on click
    const handleMouseClick = () => {
      navLinksEl.style.setProperty("--underline-position", i);
      setActiveNavlinkIndex(i);
    };
    listeners["click"].push(handleMouseClick);
    link.addEventListener("click", handleMouseClick);

    // Move underline on hover
    const handleMouseEnter = () => {
      navLinksEl.style.setProperty("--underline-position", i);
    };
    listeners["enter"].push(handleMouseEnter);
    link.addEventListener("mouseenter", handleMouseEnter);

    // Reset underline on mouse leave
    const handleMouseLeave = () => {
      navLinksEl.style.setProperty("--underline-position", activeNavlinkIndex);
    };
    listeners["leave"].push(handleMouseLeave);
    link.addEventListener("mouseleave", handleMouseLeave);
  });

  return () => {
    navlinks.forEach((link, i) => {
      link.removeEventListener("mouseenter", listeners["enter"][i]);
      link.removeEventListener("mouseleave", listeners["leave"][i]);
      link.removeEventListener("click", listeners["click"][i]);
    });
  };
};

const Navlink = ({ name, href, activeNavlinkIndex, i }) => {
  return (
    <li className={activeNavlinkIndex === i ? "active" : ""}>
      <Link to={href}>{name}</Link>
    </li>
  );
};


const Navbar = () => {
  // Scroll to anchor
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const anchor = document.querySelector(location.hash);
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  // Setup navlinks
  const navLinksContainerRef = useRef();

  const [activeNavlinkIndex, setActiveNavlinkIndex] = useState(0);
  useEffect(() => {
    const teardown = setupNavlinks(navLinksContainerRef, [
      activeNavlinkIndex,
      setActiveNavlinkIndex,
    ]);
    return () => teardown();
  }, [activeNavlinkIndex]);

  const appData = useContext(AppDataContext);
  const navlinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: `mailto:${appData.emailAddress}` },
  ]

  return (
    <nav id="navbar">
      <div className="page-margins nav-wrapper">
        <Link to="/" className="branding-link">
          <img className="full" src="/logo_full.png" alt="Home" />
          <img className="small" src="/logo_small.png" alt="Home" />
        </Link>
        <ul className="navlinks" ref={navLinksContainerRef}>
          {navlinks.map((link, i) => (
            <Navlink
              name={link.name}
              href={link.href}
              activeNavlinkIndex={activeNavlinkIndex}
              i={i}
              key={i}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
