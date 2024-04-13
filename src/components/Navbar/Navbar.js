import { useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import { DataContext } from "DataContext";
import Logo from "assets/logo_full.png";
import HamburgerIcon from "components/HamburgerIcon/HamburgerIcon";
import "./Navbar.css";

export default function Navbar() {
  const appData = useContext(DataContext);

  const navWrapperRef = useRef();
  const hamburgerIconRef = useRef();

  const handleMenuBtnClick = () => {
    navWrapperRef.current.classList.toggle("open");
  };

  useEffect(() => {
    // close navmenu when the user clicks elsewhere on the page
    const handleClick = (e) => {
      if (
        !navWrapperRef.current.contains(e.target) &&
        !hamburgerIconRef.current.contains(e.target) &&
        navWrapperRef.current.classList.contains("open")
      ) {
        navWrapperRef.current.classList.remove("open");
        hamburgerIconRef.current.classList.remove("active");
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-blur"></div>
      <div className="navigation-container-wrapper" ref={navWrapperRef}>
        <div className="navigation-container">
          <div className="navlinks-container">
            <Link to="/">
              <Icon className="icon" icon="ic:round-home" />
              Home
            </Link>

            <Link to="/#about">
              <Icon className="icon" icon="mingcute:user-info-fill" />
              About
            </Link>

            <Link to="/#projects">
              <Icon className="icon" icon="fluent:window-dev-edit-20-filled" />
              Projects
            </Link>

            <Link to="/commissions">
              <Icon className="icon" icon="heroicons-solid:code" />
              Commissions
            </Link>

            {appData && (
              <a href={`mailto:${appData.email_address}`}>
                <Icon className="icon" icon="tabler:message" />
                Contact
              </a>
            )}

            {appData && (
              <a href={appData.links.github} target="_blank" rel="noreferrer">
                <Icon className="icon" icon="mdi:github" />
                Github
              </a>
            )}

            {appData && (
              <a href={appData.links.wakatime} target="_blank" rel="noreferrer">
                <Icon className="icon" icon="simple-icons:wakatime" />
                Wakatime
              </a>
            )}
          </div>
        </div>
      </div>
      <Link to="/" data-aos="fade-up">
        <img src={Logo} alt="logo" className="logo" />
      </Link>

      <HamburgerIcon ref={hamburgerIconRef} handleClick={handleMenuBtnClick} />
    </div>
  );
}
