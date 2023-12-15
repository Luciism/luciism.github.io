import './HamburgerIcon.css'
import { forwardRef } from 'react';

const HamburgerIcon = forwardRef(({handleClick=undefined}, ref) => {
  const handleHamburgerIconClick = () => {
    ref.current.classList.toggle("active");
    
    // call passed click handler with hamburger element icon parameter
    if (handleClick !== undefined) {
      handleClick(ref.current);
    }
  };

  return (
    <div
      className="hamburger-icon"
      ref={ref}
      onClick={handleHamburgerIconClick}
    >
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </div>
  );
})
 
export default HamburgerIcon;