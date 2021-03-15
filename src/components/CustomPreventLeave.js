import usePreventLeave from "../customHooks/usePreventLeave";

const onPreventEvent = (event) => {
  event.preventDefault();
  event.returnValue = "";
};

const CustomPreventLeave = () => {
  const { protect, unprotect } = usePreventLeave(onPreventEvent);
  return (
    <div>
      <h4>Use PreventLeave</h4>
      <button onClick={protect}>Leave Protect</button>
      <button onClick={unprotect}>Leave UnProtect</button>
    </div>
  );
};

export default CustomPreventLeave;
