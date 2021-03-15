import { useEffect } from "react";

const useBeforeLeave = (callback) => {
  const leaveHandler = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      if (callback && typeof callback === "function") {
        callback();
      } else {
        console.log("Good Bye Frens..");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", leaveHandler);
    return () => document.removeEventListener("mouseleave", leaveHandler);
  }, []);
};

export default useBeforeLeave;
