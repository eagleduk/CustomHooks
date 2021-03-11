import { useState } from "react";
import useTitleUpdater from "../customHooks/useTitleUpdater";

const TitleUpdater = ({ initialTitle }) => {
  const [text, setText] = useState(initialTitle);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };
  const setTitle = useTitleUpdater(initialTitle);
  const onSubmit = (event) => {
    event.preventDefault();
    setTitle(text);
  };
  return (
    <div>
      <h4>Title Updater</h4>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Enter Title Text"
          value={text}
        />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default TitleUpdater;
