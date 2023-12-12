import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import Logo from "assets/logo_full.png";
import "./Navbar.css";

export default function Navbar() {
  const navWrapperRef = useRef();
  const menuBtnRef = useRef();

  const handleMenuBtnClick = () => {
    navWrapperRef.current.classList.toggle("open");
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (
        !navWrapperRef.current.contains(e.target) &&
        !menuBtnRef.current.contains(e.target) &&
        navWrapperRef.current.classList.contains("open")
      ) {
        navWrapperRef.current.classList.remove("open");
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

            <a href="mailto:contact@lucism.dev">
              <Icon className="icon" icon="tabler:message" />
              Contact
            </a>

            <a
              href="https://github.com/Luciism"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="icon" icon="mdi:github" />
              Github
            </a>

            <a
              href="https://discord.com/users/774848780234653726"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="icon" icon="ic:baseline-discord" />
              Discord
            </a>
          </div>
        </div>
      </div>
      <Link to="/" data-aos="fade-up">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <Icon
        icon="ri:menu-4-fill"
        className="hamburger-icon"
        data-aos="fade-up"
        onClick={handleMenuBtnClick}
        ref={menuBtnRef}
      />
    </div>
  );
}
