import useInput from "../customHooks/useInput";
import "../style/customInput.css";

const CustomInput = ({ initialValue }) => {
  const inputValidate = (value) => {
    return value.indexOf("#") === -1;
  };
  const input = useInput(initialValue, inputValidate);
  return (
    <div>
      <h4>Input Hook</h4>
      <input type="text" placeholder="Name" {...input} />
    </div>
  );
};

export default CustomInput;
