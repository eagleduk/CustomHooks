const useConfirm = (message, onConfirm, onCancel) => {
  return () => {
    if (window.confirm(message)) {
      if (onConfirm && typeof onConfirm === "function") {
        onConfirm();
      } else {
        console.log("confirm function is null");
      }
    } else {
      if (onCancel && typeof onCancel === "function") {
        onCancel();
      }
    }
  };
};

export default useConfirm;
