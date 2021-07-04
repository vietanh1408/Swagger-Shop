import React, { useEffect } from "react";

const BacktoTop = () => {
  const handleBackToTop = () => {
    if (window.scrollY > 100) {
      window.scrollTo(0, 0);
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const btn = document.getElementById("back-to-top");
    btn.style.transition = "1s";
    if (currentScrollY > 200) {
      btn.style.opacity = "1";
    } else {
      btn.style.opacity = "0";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="back-to-top" onClick={handleBackToTop}>
      <i className="fas fa-arrow-circle-up"></i>
    </div>
  );
};

export default BacktoTop;
