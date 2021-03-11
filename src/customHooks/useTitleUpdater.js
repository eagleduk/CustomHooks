import { useEffect, useState } from "react";

const useTitleUpdater = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    document.querySelector("title").innerText = title;
  }, [title]);

  return setTitle;
};

export default useTitleUpdater;
