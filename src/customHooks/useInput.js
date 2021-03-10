import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let isValidate = true;

    if (typeof validator === "function") {
      isValidate = validator(value);
    }

    isValidate && setValue(value);
  };

  const onFocus = (event) => {
    event.target.classList.add("input_focus");
  };

  const onBlur = (event) => {
    event.target.classList.remove("input_focus");
  };

  return { value, onChange, onFocus, onBlur };
};

export default useInput;
