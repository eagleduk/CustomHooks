import { useEffect, useRef } from "react";

const useCustomRef = (events) => {
  const element = useRef();

  useEffect(() => {
    const currentEle = element.current;
    if (currentEle) {
      Object.keys(events).forEach((eventKey) => {
        if (typeof events[eventKey] === "function") {
          currentEle.addEventListener(eventKey, events[eventKey]);
        }
      });
    }
    return () => {
      console.log(
        "useEffect 의 return 에서 이벤트를 삭제하지 않으면, 해당 component를 랜더링 할때마다 이벤트가 계속 추가된다."
      );
      if (currentEle) {
        Object.keys(events).forEach((eventKey) => {
          if (typeof events[eventKey] === "function") {
            currentEle.removeEventListener(eventKey, events[eventKey]);
          }
        });
      }
    };
  }, []);

  return element;
};

export default useCustomRef;
