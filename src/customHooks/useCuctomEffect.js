import { useState } from "react";

const useCuctomEffect = () => {
  const [effectValue, setEffectValue] = useState(0);

  return {
    effectValue,
    setEffectValue,
  };
};

export default useCuctomEffect;
