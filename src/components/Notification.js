import useNotification from "../customHooks/useNotification";

const Notification = () => {
  const triggerNotification = useNotification("Notification !!", {
    body: "Study hard!!",
  });
  return (
    <div>
      <h4>Use Notification</h4>
      <button onClick={triggerNotification}>Notification !!!</button>
    </div>
  );
};

export default Notification;
