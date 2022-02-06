import { useState } from "react";
import useAxios from "../customHooks/useAxios";

const Axios = () => {
  // yts.am/api/v2/list_movies.json
  const [url, setURL] = useState("https://yts.am/api/v2/list_movies.json");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setURL(value);
  };

  const { loading, data, error, refetchTrigger } = useAxios({
    headers: { "Access-Control-Allow-Origin": "*" },
    url,
  });

  return (
    <div>
      <h4>Use Axios</h4>
      <h3>{loading ? "Loading..." : data?.status || "error"}</h3>
      <input type="text" value={url} onChange={onChange} />
      <button onClick={refetchTrigger}> Request </button>
    </div>
  );
};

export default Axios;
