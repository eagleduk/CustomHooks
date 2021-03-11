import { useEffect } from "react";
import useCuctomEffect from "../customHooks/useCuctomEffect";

const Effect = () => {
  const logger = () =>
    console.log(
      "Effect 의 배열에 선언된 변수의 값이 변경될 때 실행된다.. \
    배열이 undefined 일때는 모든 변수가 변경될때 실행된고,\
    배열의 길이가 0 일때에는 component가 처음 랜더링 될때 실행된다.."
    );

  const { effectValue: ev1, setEffectValue: setEffectValue1 } = useCuctomEffect(
    0
  );
  const { effectValue: ev2, setEffectValue: setEffectValue2 } = useCuctomEffect(
    0
  );

  useEffect(logger, [ev2]);

  return (
    <div>
      <h4>Use Effect!!</h4>
      <button onClick={() => setEffectValue1(ev1 + 1)}>{ev1}</button>
      <button onClick={() => setEffectValue2(ev2 + 1)}>{ev2}</button>
    </div>
  );
};
export default Effect;
