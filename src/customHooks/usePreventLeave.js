const usePreventLeave = (callback) => {
  const protect = () => {
    if (callback && typeof callback === "function")
      window.addEventListener("beforeunload", callback);
  };
  const unprotect = () => {
    if (callback && typeof callback === "function")
      window.removeEventListener("beforeunload", callback);
  };

  return {
    protect,
    unprotect,
  };
};

export default usePreventLeave;
