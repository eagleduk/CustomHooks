import { useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();

  const excuteCallback = () => {
    if (callback && typeof callback === "function") {
      callback();
    }
  };

  const clickToFullScreen = (event) => {
    if (element.current) {
      element.current.requestFullscreen();
    }
    excuteCallback();
  };

  const clickToExitScreen = (event) => {
    document.exitFullscreen();
    excuteCallback();
  };

  return {
    element,
    clickToFullScreen,
    clickToExitScreen,
  };
};

export default useFullScreen;
