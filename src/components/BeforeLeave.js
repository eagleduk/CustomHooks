import useBeforeLeave from "../customHooks/useBeforeLeave";

const leaveEvent = () => {
  //alert("Plz do not leave!!");
};

const BeforeLeave = () => {
  useBeforeLeave(leaveEvent);
  return (
    <div>
      <h4>Before leave document</h4>
    </div>
  );
};

export default BeforeLeave;
