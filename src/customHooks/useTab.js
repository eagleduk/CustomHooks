import { useState } from "react";

const useTab = (initialIndex, dataOfTabs = []) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return {
    currentData: dataOfTabs[currentIndex],
    setCurrentIndex,
  };
};

export default useTab;
