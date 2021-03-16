import useNetworkStatus from "../customHooks/useNetworkStatus";

const NetworkStatus = () => {
  const onNetworkChange = (isOnline) => {
    console.log(isOnline ? "Network onLine!!!" : "Network offLine...");
  };
  const isOnline = useNetworkStatus(onNetworkChange);
  return (
    <div>
      <h4>Use Network Status</h4>
      <h5>{isOnline ? "online" : "offline"}</h5>
    </div>
  );
};

export default NetworkStatus;
