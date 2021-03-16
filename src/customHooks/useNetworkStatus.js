import { useEffect, useState } from "react";

const useNetworkStatus = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const networkHandler = () => {
    if (onChange && typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", networkHandler);
    window.addEventListener("offline", networkHandler);
    return () => {
      window.addEventListener("online", networkHandler);
      window.addEventListener("offline", networkHandler);
    };
  }, []);

  return status;
};

export default useNetworkStatus;
