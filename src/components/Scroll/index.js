import React, { useState, useEffect } from 'react';
import { BsArrowUpSquareFill } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <BsArrowUpSquareFill size={30} onClick={scrollToTop} style={{ position: 'fixed', bottom: '10px', left: '20px', transform:'transform(50%,50%)' }} />
      )}
    </>
  );
};

export default ScrollToTopButton;
