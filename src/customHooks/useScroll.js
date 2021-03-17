import { useEffect, useState } from "react";

const useScroll = (callback) => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const scrollHandler = (event) => {
    const { scrollX, scrollY } = window;
    setScroll({ x: scrollX, y: scrollY });
    if (callback && typeof callback === "function") {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return scroll;
};

export default useScroll;
