// src/hooks/useScrollToHash.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200); // small delay to wait for page render
      }
    }
  }, [hash]);
};

export default useScrollToHash;
