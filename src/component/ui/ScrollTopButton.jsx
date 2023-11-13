import React, { useState, useEffect } from 'react';

const ScrollTopButton = ({url}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="scrollTopButton"
    className={isVisible ? 'show' : ''}
    onClick={scrollToTop}>

    </div>
  );
};

export default ScrollTopButton;
