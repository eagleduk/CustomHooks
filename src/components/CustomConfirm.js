import useConfirm from "../customHooks/useConfirm";

const confirmMessage = "Are you Sure??";
const onConfirm = () => console.log("Confirm....");
const onCancel = () => console.log("Cancel...");

const CustomConfirm = () => {
  const customConfirm = useConfirm(confirmMessage, onConfirm, onCancel);
  return (
    <div>
      <h4>Use Confirm</h4>
      <button onClick={customConfirm}>Confirm</button>
    </div>
  );
};

export default CustomConfirm;
