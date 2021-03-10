import useInput from "../customHooks/useInput";
import "../style/customInput.css";

const CustomInput = ({ initialValue }) => {
  const inputValidate = (value) => {
    return value.indexOf("#") === -1;
  };
  const input = useInput(initialValue, inputValidate);
  return (
    <div>
      <input type="text" placeholder="Name" {...input} />
    </div>
  );
};

export default CustomInput;
