import { Icon } from "@iconify/react";
import './BackToTopBtn.css'
import { useEffect, useRef } from "react";

const BackToTopBtn = () => {
  const backToTopBtnRef = useRef();
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // show if at least 200px down the page
      if (document.documentElement.scrollTop > 200) {
        backToTopBtnRef.current.classList.add('show');
      } else {
        backToTopBtnRef.current.classList.remove("show");

      }
    })
  }, [])

  const handleBackToTopBtnClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div
      className="back-to-top-btn"
      ref={backToTopBtnRef}
      onClick={handleBackToTopBtnClick}
    >
      <Icon className="back-to-top-arrow" icon="mingcute:arrow-up-fill" />
    </div>
  );
}

export default BackToTopBtn;