// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Optional: setTimeout helps in some cases where content loads slowly
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" }); // or 'smooth'
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
