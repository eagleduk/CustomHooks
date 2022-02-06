import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [status, setStatus] = useState({
    loading: true,
  });

  const [trigger, setTrigger] = useState(0);

  const refetchTrigger = () => {
    setStatus({
      ...status,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setStatus({
          ...status,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        console.log(error);
        setStatus({
          ...status,
          loading: false,
          error,
        });
      });
  }, [trigger]);

  return { ...status, refetchTrigger };
};

export default useAxios;
