import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import "./BackToTop.css";

const BackToTopBtn = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top-btn ${scrollPos > 100 ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Icon icon="line-md:arrow-up" />
    </button>
  );
};

export default BackToTopBtn;
